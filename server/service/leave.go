package service

type LeaveService interface {
	AddLeave(AddLeaveRequest, uint) (*LeaveResponse, error)
	GetLeavesByUser(uint) ([]LeaveResponse, error)
	GetLeaves() ([]LeaveResponse, error)
}

type AddLeaveRequest struct {
	Type      string `json:"type"`
	Detail    string `json:"detail"`
	TimeStart string `json:"time_start"`
	TimeEnd   string `json:"time_end"`
}

type LeaveResponse struct {
	ID        uint   `json:"id"`
	Type      string `json:"type"`
	Detail    string `json:"detail"`
	TimeStart string `json:"time_start"`
	TimeEnd   string `json:"time_end"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`
}
