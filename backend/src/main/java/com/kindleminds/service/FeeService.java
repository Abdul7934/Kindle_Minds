package com.kindleminds.service;

import com.kindleminds.model.Fee;
import java.util.List;

public interface FeeService {
    Fee createFee(Fee fee);

    List<Fee> getFeesByStudent(String studentId);

    Fee updateStatus(String id, Fee.Status status);
}
