package com.backend.modal;

import com.backend.user.domain.PaymentMethod;
import com.backend.user.domain.PaymentStatus;
import lombok.Data;

@Data
public class PaymentDetails {
	
	private PaymentMethod paymentMethod;
	private PaymentStatus status;
	private String paymentId;
	private String razorpayPaymentLinkId;
	private String razorpayPaymentLinkReferenceId;
	private String razorpayPaymentLinkStatus;
	private String razorpayPaymentId​;

}
