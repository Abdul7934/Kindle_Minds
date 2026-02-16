package com.kindleminds.service.impl;

import com.kindleminds.model.ContactMessage;
import com.kindleminds.repository.ContactMessageRepository;
import com.kindleminds.service.ContactMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ContactMessageServiceImpl implements ContactMessageService {

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @Override
    public ContactMessage saveMessage(ContactMessage message) {
        return contactMessageRepository.save(message);
    }

    @Override
    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findByOrderByCreatedAtDesc();
    }

    @Override
    public void markAsRead(String id) {
        contactMessageRepository.findById(id).ifPresent(msg -> {
            msg.setRead(true);
            contactMessageRepository.save(msg);
        });
    }

    @Override
    public void deleteMessage(String id) {
        contactMessageRepository.deleteById(id);
    }
}
