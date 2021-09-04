        var SpeechRecognition = window.webkitSpeechRecognition;

        var recognition = new SpeechRecognition();

        const TextBox = document.getElementById("cheese");

        var never_gonna_give_you_up = new Audio("notarickroll.mp3")

        function start_function() {
            TextBox.innerHTML = "";
            recognition.start();
        }

        recognition.onresult = function (event) {
            console.log(event);
            var content = event.results[0][0].transcript;
            TextBox.innerHTML = content;
            console.log(content);
            if (content == "Take a selfie" || content=="take a selfie") {
                speak();
            } if (content == "Rickroll me" || content=="rickroll me") {
                never_gonna_give_you_up.play();
            }
        }

        preview = document.getElementById("preview");

        function speak() {
            
            synth = window.speechSynthesis;
            speak_data = "Smile for the camera!";
            var utterThis =  new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
            Webcam.attach(preview);
            setTimeout(function(){
                console.log("SpeakSynthesis");
                take_selfie();
                save();
            }, 3000);
        }

        
        Webcam.set({
            width:300,
            height:300,
            image_format:"jpeg",
            image_quality:90,
        })

        function take_selfie() {
            console.log("Webcam.snap();")
            Webcam.snap(function(data_uri) {
                document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
            });
            
        }

        function save() {
            link = document.getElementById("download");
            image = document.getElementById("selfie_image").src;
            link.href = image;
            link.click();
        }