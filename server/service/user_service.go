package service

import (
	"github.com/biskitsx/Leave-Management-System/repository"
	"gorm.io/gorm"
)

type userService struct {
	db *gorm.DB
}

func NewUserService(db *gorm.DB) UserService {
	db.AutoMigrate(&repository.User{})
	return &userService{
		db: db,
	}
}

func (s userService) GetUsers() ([]GetUserResponse, error) {
	var users []repository.User
	s.db.Find(&users)
	var res []GetUserResponse
	for _, user := range users {
		res = append(res, GetUserResponse{
			ID:        user.ID,
			Username:  user.Username,
			FirstName: user.FirstName,
			LastName:  user.LastName,
		})
	}
	return res, nil
}
