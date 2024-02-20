function getBotResponse(input) {
    var chatbox = document.getElementById("chatbox");
    chatbox.scrollTop = chatbox.scrollHeight;

    // Simple responses
    if (input == "hello") {
        return "Hello there! Enter your mobile no. for any queries";
    } else if (input == "thanks") {
        return "Talk to you later!";
    }
    else if(input == "How can I contribute to a greener environment through your services?"){
        return "To schedule a garbage collection, simply fill out our online form with your location details and preferred date. Our team will contact you to confirm the pickup arrangement."
    } 
    else if(input == "Do you provide recycling services for plastic products?"){
        return "Absolutely! We offer recycling services for plastic products. Our recycling facilities ensure that plastic waste is properly processed and transformed into useful recycled materials."
    } 
    else if(input == "How can I purchase products made from recycled plastic?"){
        return "You can purchase products made from recycled plastic through our website. We have a wide range of eco-friendly products available for sale, including household items, furniture, and accessories."
    } 
    else if(input == "What are the benefits of buying products made from recycled plastic?"){
        return "Buying products made from recycled plastic helps reduce the demand for new plastic production, conserves natural resources, and minimizes waste in landfills. It's an environmentally responsible choice that promotes sustainability."
    } 
    else if(input == "How can I schedule a garbage collection from my location?"){
        return "To schedule a garbage collection, simply fill out our online form with your location details and preferred date. Our team will contact you to confirm the pickup arrangement."
    } 
    else if (input == Number){
        return "Thanks providing the mobile no. associated with your registered account. Now you can submit your query"
    } else if(input == "loved enviro+"){
        return "Thanks for sharing the feedback with us:)"
    } 
    else if(input == "when will I get my delivery"){
        return " You'll get your shipping order within 48 hours for more imformation regarding your shipping you can contact us 1235 5398 6878 . Good Luck!!"
    } 
    else if(input == "good"){
        return "I am Glad "
    } 
    
    else {
        return "Our agent will call you within 24 hours related to your query Submit your query if the query is submited ignore this message please"
    }
}
