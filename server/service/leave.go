package service

type LeaveService interface {
	AddLeave(AddLeaveRequest, uint) (*LeaveResponse, error)
	GetLeavesByUser(uint) (*LeaveResponseWithCount, error)
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
	LeaveDay  uint   `json:"leave_day"`
}

type LeaveResponseWithCount struct {
	LeaveResponses []LeaveResponse `json:"leave_responses"`
	CountSick      uint            `json:"count_sick"`
	CountBusiness  uint            `json:"count_business"`
	CountVacation  uint            `json:"count_vacation"`
}
