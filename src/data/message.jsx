export const MessageResponse1 = [
  {
    sender: "Customer Service AI Agent",
    content: "Checking for WhatsApp messages from customers",
    photo: "/CustomerServiceAI.png",
    time: new Date().toLocaleString(),
  },
  {
    sender: "Customer Service AI Agent",
    content: `
    Found 1 message from number <span class='bg-black text-white px-2 py-[0.1rem] rounded-full'> +6054323151 </span>
    
    <p class='mt-3'>
      <i>
      Hi, I’m planning  to work for a project in the U.S. for the next six month and I want to know which CIMB card offers the best exchange rates.
      </i>
    </p>
    `,
    icon: "whatsapp",
    photo: "/CustomerServiceAI.png",
    time: new Date().toLocaleString(),
  },
  {
    sender: "Customer Service AI Agent",
    content: [
      {
        content: "<div class='min-w-[380px]'> Checking Relevant Product </div",
        isChecking: false,
      },
      {
        content: "1. Destination Country = USA",
        isChecking: true,
      },
      {
        content: "2. Query = 'Card that offers the best exchange rates'",
        isChecking: true,
      },
    ],
    time: new Date().toLocaleString(),
    photo: "/CustomerServiceAI.png",
  },
  {
    sender: "Customer Service AI Agent",
    content: `Creating WhatsApp Message Response
    <p class='mt-3'>
    <i>
    The <a href='https://www.cimb.com.my/en/personal/day-to-day-banking/cards/credit-card/cimb-preferred-visa-infinite-credit-card.html' class='text-blue-500'>CIMB Preferred Visa Infinite Credit Card</a> provides <strong>preferential foreign exchange rates</strong> for its users, which can lead to savings on currency conversions and it is an excellent choice for international transactions. It offers no additional markup fees on overseas spending, ensuring you get competitive exchange rates.  
    </i>
    </p>
    `,
    photo: "/CustomerServiceAI.png",
    imageIcon: "/credit-card.png",
    icon: "whatsapp",
    time: new Date().toLocaleString(),
  },
];
export const MessageResponse2 = [
  {
    sender: "Customer Service AI Agent",
    content:
      "I can assist with your application. Let me fetch your Customer Information from your mobile number : <span class='bg-black text-white px-2 py-[0.1rem] rounded-full'> +6054323152 </span>",
    photo: "/CustomerServiceAI.png",
    time: new Date().toLocaleString(),
  },
  {
    sender: "Backend AI Agent",
    content:
      "Received mobile number <span class='bg-black text-white px-2 py-[0.1rem] rounded-full'> +6054323152 </span> and fetching customer information and details.",
    photo: "/BackendAI.png",
    time: new Date().toLocaleString(),
  },
  {
    sender: "Backend AI Agent",
    content:
      "Adding details to the form and sending it to the Customer Service Agent to obtain authorization from customer ID <span class='bg-black text-white px-2 py-[0.1rem] rounded-full'>5435432</span>.",
    photo: "/BackendAI.png",
    time: new Date().toLocaleString(),
    icon: "policy",
    imageIcon: "/filled-credit.png",
    insuranceData: true,
  },
  {
    sender: "Product AI Agent",
    content: `Creating WhatsApp to customer id <span class='bg-black text-white px-2 py-[0.1rem] rounded-full'>5435432</span>
     <p class='mt-3'>
    <i>
    Mr Smith, <strong>(Customer id 5435432)</strong> please find the application with the infromation filled up as per your request. Please review and approve through WhatsApp message.   
    </i>
    </p>
    `,
    photo: "/ProductAI.png",
    icon: "whatsapp",
    time: new Date().toLocaleString(),
  },
];

export const MessageResponse3 = [
  {
    sender: "Customer Service AI Agent",
    content:
      "Processing application for the <a href='https://www.cimb.com.my/en/personal/day-to-day-banking/cards/credit-card/cimb-preferred-visa-infinite-credit-card.html' class='text-blue-500'>CIMB Preferred Visa Infinite Credit Card</a>",
    photo: "/CustomerServiceAI.png",
    time: new Date().toLocaleString(),
  },
  {
    sender: "Product AI Agent",
    content:
      "Ensure Mr.Smith is informed about the card’s benefits, such as complimentary <strong>airport lounge access and travel insurance coverage.</strong>",
    photo: "/ProductAI.png",
    time: new Date().toLocaleString(),
  },
  {
    sender: "Backend AI Agent",
    content: "Application <strong>approved</strong>. Card issuance initiated.",
    photo: "/BackendAI.png",
    time: new Date().toLocaleString(),
  },
  {
    sender: "Customer Service AI Agent",
    content:
      "Thank you, Mr.Smith <strong>Your application has been approved.</strong> Your <a href='https://www.cimb.com.my/en/personal/day-to-day-banking/cards/credit-card/cimb-preferred-visa-infinite-credit-card.html' class='text-blue-500'>CIMB Preferred Visa Infinite Credit Card</a> will be delivered to your registered address within <strong>5-7 business days</strong>.",
    photo: "/CustomerServiceAI.png",
    time: new Date().toLocaleString(),
  },
  {
    sender: "Customer Service AI Agent",
    content:
      "<i> Mr Smith, one recommendation, since you will be in US, Investing in global equities can provide diversification and potential growth. <a class='https://www.cimb.com.my/en/personal/day-to-day-banking/cards/credit-card/cimb-preferred-visa-infinite-credit-card.html'>The Principal Global Sustainable Growth Fund</a> focuses on companies with strong sustainability practices, aiming for long-term capital appreciation.</i>",
    photo: "/CustomerServiceAI.png",
    time: new Date().toLocaleString(),
    icon: "whatsapp",
  },
];

export const MessageResponse4 = [
  {
    sender: "Customer Service AI Agent",
    content: `
      <i>
    The <a href='https://www.cimb.com.my/en/personal/promotions/latest-promotions/principal-global-sustainable-growth-fund.html' class='text-blue-500'>Principal Global Sustainable Growth Fund</a> is an investment opportunity focusing on companies that demonstrate strong environmental, social, and governance (ESG) practices, aiming to provide sustainable long-term growth for investors. This fund is available through CIMB Malaysia.
      </i>
      `,
    photo: "/CustomerServiceAI.png",
    icon: "whatsapp",
    imageIcon: "/investment.png",
    time: new Date().toLocaleString(),
  },
];

export const MessageResponse5 = [
  {
    sender: "Customer Service AI Agent",
    content: `
      <p>
        <i>
        <strong>Our pleasure, Mr.Smith!</strong> If you have <strong>further questions</strong> or need <strong>assistance in the future</strong>, feel free to <strong>reach out</strong>. We're here to help you.
        </i>
      </p>
      `,
    photo: "/CustomerServiceAI.png",
    icon: "whatsapp",
    time: new Date().toLocaleString(),
  },
];
