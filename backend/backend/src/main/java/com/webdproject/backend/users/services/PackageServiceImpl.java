package com.webdproject.backend.users.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdproject.backend.users.exceptionHandlers.InvalidCredentialsException;
import com.webdproject.backend.users.models.EmailDto;
import com.webdproject.backend.users.models.PackageModel;
import com.webdproject.backend.users.models.UserModel;
import com.webdproject.backend.users.repository.PackageRepository;
import com.webdproject.backend.users.repository.UserRepository;

@Service
public class PackageServiceImpl implements PackageService {

    @Autowired
    private PackageRepository packageRepo;

    @Autowired
    private UserRepository userRepository;

    @Override
    public PackageModel bookTicket(PackageModel packageInfo) {
        // TODO Auto-generated method stub
        if (packageInfo.getFirstName() == null || packageInfo.getLastName() == null || packageInfo.getEmail() == null
                || packageInfo.getPhoneNumber() == null || packageInfo.getPackage_tour() == null
                || packageInfo.getAdults() == null || packageInfo.getChilds() == null
                || packageInfo.getStart_date() == null || packageInfo.getEnd_date() == null
                || packageInfo.getNo_of_days() == null || packageInfo.getNo_of_rooms() == null
                || packageInfo.getFare() == null) {
            throw new InvalidCredentialsException("Please fill all the fields.");
        }
        String userEmail = packageInfo.getEmail();
        UserModel userExist = this.userRepository.findByEmail(userEmail);
        if (userExist == null) {
            throw new InvalidCredentialsException("Fake user!!. May be you are not logged in.");
        }
        userExist.setBookingTickets(packageInfo);
        packageInfo.setUser(userExist);
        PackageModel savedPackage = this.packageRepo.save(packageInfo);
        return savedPackage;

    }

    @Override
    public List<PackageModel> getUserTicket(EmailDto userEmail) {
        // TODO Auto-generated method stub

        String email = userEmail.getUserEmail();
        UserModel userExist = this.userRepository.findByEmail(email);
        if (userExist == null) {
            throw new InvalidCredentialsException(" May be you are not logged in.");
        }
        List<PackageModel> getTickets = userExist.getBookingTickets();
       return getTickets;

    }

}
