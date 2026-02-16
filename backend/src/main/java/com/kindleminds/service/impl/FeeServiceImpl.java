package com.kindleminds.service.impl;

import com.kindleminds.model.Fee;
import com.kindleminds.repository.FeeRepository;
import com.kindleminds.service.FeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class FeeServiceImpl implements FeeService {

    @Autowired
    private FeeRepository feeRepository;

    @Override
    public Fee createFee(Fee fee) {
        return feeRepository.save(fee);
    }

    @Override
    public List<Fee> getFeesByStudent(String studentId) {
        return feeRepository.findByStudentId(studentId);
    }

    @Override
    public Fee updateStatus(String id, Fee.Status status) {
        return feeRepository.findById(id).map(fee -> {
            fee.setStatus(status);
            if (status == Fee.Status.PAID) {
                fee.setPaymentDate(LocalDate.now());
            }
            return feeRepository.save(fee);
        }).orElseThrow(() -> new RuntimeException("Fee record not found"));
    }
}
