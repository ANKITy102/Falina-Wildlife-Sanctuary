package com.webdproject.backend.users.models;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MyComponent {

    @Value("${client_id}")
    private String CLIENT_ID;

    @Value("${email}")
    private String EMAIL;

    public String getCLIENT_ID() {
        return CLIENT_ID;
    }

    public void setCLIENT_ID(String cLIENT_ID) {
        CLIENT_ID = cLIENT_ID;
    }

    public String getEMAIL() {
        return EMAIL;
    }

    public void setEMAIL(String eMAIL) {
        EMAIL = eMAIL;
    }

    // ...

}
