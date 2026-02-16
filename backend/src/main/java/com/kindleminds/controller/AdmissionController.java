package com.kindleminds.controller;

import com.kindleminds.model.Admission;
import com.kindleminds.service.AdmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// @CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/admissions")
public class AdmissionController {

    @Autowired
    private AdmissionService admissionService;

    @PostMapping
    public Admission submitApplication(@RequestBody Admission admission) {
        return admissionService.submitApplication(admission);
    }

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<Admission> getAllAdmissions() {
        return admissionService.getAllAdmissions();
    }

    @GetMapping("/status/{status}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<Admission> getAdmissionsByStatus(@PathVariable Admission.Status status) {
        return admissionService.getAdmissionsByStatus(status);
    }

    @PutMapping("/{id}/status")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Admission updateStatus(@PathVariable String id, @RequestBody Admission statusUpdate) {
        return admissionService.updateStatus(id, statusUpdate.getStatus());
    }

    @GetMapping("/my-admissions")
    @PreAuthorize("hasAuthority('PARENT')")
    public List<Admission> getMyAdmissions() {
        org.springframework.security.core.Authentication authentication = org.springframework.security.core.context.SecurityContextHolder
                .getContext().getAuthentication();
        com.kindleminds.service.impl.UserDetailsImpl userDetails = (com.kindleminds.service.impl.UserDetailsImpl) authentication
                .getPrincipal();
        return admissionService.getAdmissionsByEmail(userDetails.getEmail());
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void deleteAdmission(@PathVariable String id) {
        admissionService.deleteAdmission(id);
    }
}
