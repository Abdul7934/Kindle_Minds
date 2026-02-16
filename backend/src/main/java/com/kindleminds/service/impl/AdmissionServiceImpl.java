package com.kindleminds.service.impl;

import com.kindleminds.model.Admission;
import com.kindleminds.repository.AdmissionRepository;
import com.kindleminds.service.AdmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AdmissionServiceImpl implements AdmissionService {

    @Autowired
    private AdmissionRepository admissionRepository;

    @Override
    public Admission submitApplication(Admission admission) {
        admission.setStatus(Admission.Status.PENDING);
        admission.setAppliedDate(LocalDateTime.now());
        return admissionRepository.save(admission);
    }

    @Override
    public List<Admission> getAllAdmissions() {
        return admissionRepository.findAllByOrderByAppliedDateDesc();
    }

    @Override
    public List<Admission> getAdmissionsByStatus(Admission.Status status) {
        return admissionRepository.findByStatus(status);
    }

    @Override
    public List<Admission> getAdmissionsByEmail(String email) {
        return admissionRepository.findByEmail(email);
    }

    @Override
    public Admission updateStatus(String id, Admission.Status status) {
        return admissionRepository.findById(id).map(admission -> {
            admission.setStatus(status);
            return admissionRepository.save(admission);
        }).orElseThrow(() -> new RuntimeException("Admission not found"));
    }

    @Override
    public void deleteAdmission(String id) {
        admissionRepository.deleteById(id);
    }
}
