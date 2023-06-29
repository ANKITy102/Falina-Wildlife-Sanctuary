package com.webdproject.backend.users.services;

import java.util.List;

import com.webdproject.backend.users.exceptionHandlers.InvalidCredentialsException;
// import com.webdproject.backend.users.models.EmailDto;
import com.webdproject.backend.users.models.PackageModel;

public interface PackageService {
    PackageModel bookTicket(PackageModel packageInfo, String token) throws InvalidCredentialsException;

    List<PackageModel> getUserTicket(String token);
    List<PackageModel> getAllTickets(String token);
}
