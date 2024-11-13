interface Response {
  keywords: string[];
  reply: string;
}

export const responses: Response[] = [
  {
    keywords: ['hello', 'hi', 'hey'],
    reply: 'Hello! Welcome to IILM University Greater Noida. How can I assist you today?'
  },
  {
    keywords: ['admission', 'apply', 'enroll'],
    reply: 'For admissions at IILM University Greater Noida, you can visit our admission portal or contact our admissions office at +91-XXX-XXXXXXX. Would you like to know about our programs?'
  },
  {
    keywords: ['course', 'program', 'degree'],
    reply: 'IILM University offers various undergraduate and postgraduate programs including BBA, MBA, B.Tech, and more. Which program are you interested in?'
  },
  {
    keywords: ['fee', 'fees', 'cost'],
    reply: 'The fee structure varies by program. For detailed fee information, please visit our website or contact our admissions office. Would you like the contact information?'
  },
  {
    keywords: ['placement', 'job', 'career'],
    reply: 'IILM University has an excellent placement record with top companies visiting our campus. Our placement cell provides comprehensive career guidance and opportunities.'
  },
  {
    keywords: ['faculty', 'teacher', 'professor'],
    reply: 'Our faculty members are highly qualified professionals with extensive academic and industry experience. They are dedicated to providing quality education and mentorship.'
  },
  {
    keywords: ['campus', 'facility', 'infrastructure'],
    reply: 'Our Greater Noida campus features modern infrastructure, well-equipped labs, library, sports facilities, and more. Would you like to schedule a campus visit?'
  },
  {
    keywords: ['scholarship', 'financial aid'],
    reply: 'IILM University offers merit-based scholarships and financial aid programs. The criteria and benefits vary based on academic performance and other factors.'
  },
  {
    keywords: ['hostel', 'accommodation', 'residence'],
    reply: 'We provide comfortable and secure hostel facilities for both boys and girls with modern amenities and 24/7 security.'
  },
  {
    keywords: ['contact', 'reach', 'location'],
    reply: 'IILM University is located in Greater Noida. You can reach us at contact@iilm.edu or visit our campus at [Address]. How else can I help you?'
  }
];

export function findResponse(input: string): string {
  const lowercaseInput = input.toLowerCase();
  
  for (const response of responses) {
    if (response.keywords.some(keyword => lowercaseInput.includes(keyword))) {
      return response.reply;
    }
  }
  
  return "I apologize, but I'm not sure about that. Please contact our help desk for more specific information, or try asking another question.";
}