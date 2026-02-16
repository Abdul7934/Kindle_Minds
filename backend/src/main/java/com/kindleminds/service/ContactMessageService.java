package com.kindleminds.service;

import com.kindleminds.model.ContactMessage;
import java.util.List;

public interface ContactMessageService {
    ContactMessage saveMessage(ContactMessage message);

    List<ContactMessage> getAllMessages();

    void markAsRead(String id);

    void deleteMessage(String id);
}
