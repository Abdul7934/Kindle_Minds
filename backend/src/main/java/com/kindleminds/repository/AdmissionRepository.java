package com.kindleminds.repository;

import com.kindleminds.model.Admission;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface AdmissionRepository extends MongoRepository<Admission, String> {
    List<Admission> findByStatus(Admission.Status status);

    List<Admission> findByEmail(String email);

    List<Admission> findAllByOrderByAppliedDateDesc();
}
