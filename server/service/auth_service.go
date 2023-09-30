package service

import (
	"errors"

	"github.com/biskitsx/Leave-Management-System/repository"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type authService struct {
	db         *gorm.DB
	jwtService JwtService
}

func NewAuthService(db *gorm.DB) AuthService {
	return &authService{
		db:         db,
		jwtService: NewJwtService(),
	}
}

func (s *authService) Signup(req NewSignupRequest) (*NewSignupResponse, error) {
	user := repository.User{}
	s.db.First(&user, "username = ?", req.Username)
	if user.Username != "" {
		return nil, errors.New("username already exists")
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		return nil, err
	}
	newUser := repository.User{
		Username:  req.Username,
		Password:  string(hash),
		FirstName: req.FirstName,
		LastName:  req.LastName,
	}

	s.db.Create(&newUser)
	return &NewSignupResponse{
		ID:        newUser.ID,
		Username:  newUser.Username,
		FirstName: newUser.FirstName,
		LastName:  newUser.LastName,
	}, nil
}

func (s authService) Login(req LoginRequest) (*LoginResponse, error) {
	user := repository.User{}
	s.db.First(&user, "username = ?", req.Username)
	if user.Username == "" {
		return nil, errors.New("username does not exist")
	}

	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password))
	if err != nil {
		return nil, errors.New("wrong password")
	}
	accessTokenInfo := AccessTokenInfo{
		UserId:   user.ID,
		Username: user.Username,
	}
	accessToken, err := s.jwtService.GenerateToken(accessTokenInfo, 3600000)
	if err != nil {
		return nil, err
	}
	return &LoginResponse{
		Token: accessToken,
	}, nil
}
