package service

import (
	"time"

	"github.com/biskitsx/Leave-Management-System/repository"
	"gorm.io/gorm"
)

type leaveService struct {
	db *gorm.DB
}

func NewLeaveService(db *gorm.DB) LeaveService {
	db.AutoMigrate(&repository.Leave{})
	return &leaveService{
		db: db,
	}
}

func (s leaveService) AddLeave(req AddLeaveRequest, userId uint) (*LeaveResponse, error) {
	timeStartDate, err := time.Parse("2006-01-02", req.TimeStart)
	if err != nil {
		return nil, err
	}
	timeEndDate, err := time.Parse("2006-01-02", req.TimeEnd)
	if err != nil {
		return nil, err
	}
	leave := repository.Leave{
		TimeStart: timeStartDate,
		TimeEnd:   timeEndDate,
		Type:      req.Type,
		Detail:    req.Detail,
		UserID:    userId,
	}
	s.db.Create(&leave)

	return &LeaveResponse{
		ID:        leave.ID,
		LeaveType: leave.Type,
		Detail:    leave.Detail,
		TimeStart: leave.TimeStart.Format("2006-01-02"),
		TimeEnd:   leave.TimeEnd.Format("2006-01-02"),
	}, nil
}

func (s leaveService) GetLeavesByUser(userId uint) ([]LeaveResponse, error) {
	var leaves []repository.Leave
	s.db.Where("user_id = ?", userId).Find(&leaves)
	var res []LeaveResponse
	for _, leave := range leaves {
		res = append(res, LeaveResponse{
			ID:        leave.ID,
			LeaveType: leave.Type,
			Detail:    leave.Detail,
			TimeStart: leave.TimeStart.Format("2006-01-02"),
			TimeEnd:   leave.TimeEnd.Format("2006-01-02"),
		})
	}
	return res, nil
}

func (s leaveService) GetLeaves() ([]LeaveResponse, error) {
	var leaves []repository.Leave
	s.db.Find(&leaves)
	var res []LeaveResponse
	for _, leave := range leaves {
		res = append(res, LeaveResponse{
			ID:        leave.ID,
			LeaveType: leave.Type,
			Detail:    leave.Detail,
			TimeStart: leave.TimeStart.Format("2006-01-02"),
			TimeEnd:   leave.TimeEnd.Format("2006-01-02"),
		})
	}
	return res, nil
}
