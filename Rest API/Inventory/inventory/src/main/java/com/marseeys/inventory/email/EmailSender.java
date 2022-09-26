package com.marseeys.inventory.email;

import com.marseeys.inventory.entity.email.EmailDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Component;

@Component
public class EmailSender {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail(EmailDetails emailDetails) {
        MimeMessagePreparator mailMessage = mimeMessage -> {
            MimeMessageHelper message = new MimeMessageHelper(
                    mimeMessage,
                    true
            );

            for (String address : emailDetails.getRecipient()) {
                message.addTo(address);
            }
            message.setSubject(emailDetails.getSubject());
            message.setText(emailDetails.getMsgBody(), true);
        };

        javaMailSender.send(mailMessage);
    }
}
