package com.kindleminds.controller;

import com.kindleminds.model.Fee;
import com.kindleminds.service.FeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// @CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/fees")
public class FeeController {

    @Autowired
    private FeeService feeService;

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public Fee createFee(@RequestBody Fee fee) {
        return feeService.createFee(fee);
    }

    @GetMapping("/student/{studentId}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('PARENT')")
    public List<Fee> getFeesByStudent(@PathVariable String studentId) {
        return feeService.getFeesByStudent(studentId);
    }

    @PutMapping("/{id}/status")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Fee updateStatus(@PathVariable String id, @RequestBody Fee statusUpdate) {
        return feeService.updateStatus(id, statusUpdate.getStatus());
    }
}
