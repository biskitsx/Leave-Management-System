package service

type AuthService interface {
	Signup(NewSignupRequest) (*NewSignupResponse, error)
	Login(req LoginRequest) (*LoginResponse, error)
}

type NewSignupRequest struct {
	Username  string `json:"username"`
	Password  string `json:"password"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_ame"`
}

type NewSignupResponse struct {
	ID        uint   `json:"id"`
	Username  string `json:"username"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
}

type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type LoginResponse struct {
	Token string `json:"token"`
}

type AccessTokenInfo struct {
	UserId   uint   `json:"user_id"`
	Username string `json:"username"`
}
