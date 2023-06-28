package com.webdproject.backend.users.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.webdproject.backend.users.models.PackageModel;
public interface PackageRepository extends JpaRepository<PackageModel,Long> {
    PackageModel findById(long tickedId);
}
