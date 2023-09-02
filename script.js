document.getElementById('clear-button').addEventListener('click', function() {
            document.getElementById('sign-in-form').reset();
        });

        document.getElementById('submit-button').addEventListener('click', function() {
            const firstName = document.getElementById('firstname').value;
            const middleName = document.getElementById('middlename').value;
            const lastName = document.getElementById('lastname').value;
            const birthday = document.getElementById('birthday').value;
            const address = document.getElementById('address').value;

            if (firstName && middleName && lastName && birthday && address) {
                alert(`Entered Details:\n\nFirst Name: ${firstName}\nMiddle Name: ${middleName}\nLast Name: ${lastName}\nBirthday: ${birthday}\nAddress: ${address}`);
            } else {
                alert('Please fill in all details.');
            }
        });

