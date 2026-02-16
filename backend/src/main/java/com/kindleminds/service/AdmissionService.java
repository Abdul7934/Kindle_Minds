package com.kindleminds.service;

import com.kindleminds.model.Admission;
import java.util.List;

public interface AdmissionService {
    Admission submitApplication(Admission admission);

    List<Admission> getAllAdmissions();

    List<Admission> getAdmissionsByStatus(Admission.Status status);

    List<Admission> getAdmissionsByEmail(String email);

    Admission updateStatus(String id, Admission.Status status);

    void deleteAdmission(String id);
}
