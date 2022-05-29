# matrix_media_proj
---------------------------------------
Developer Name   : Sk Shahbaz Ali
Location         : Kolkata
Project          : DemoApp (Matrix Media Project)
Descritption     : Project is based on login a user and storing its details in database
Start Date       : Saturday 28th May 2022
End Date         : Monday 30th May 2022
Submission Date  : Monday 30th May 2022
---------------------------------------
---------------------------------------
Hello User
About Project:
    Demo App project uses Firebase authentication to authenticate user by sending One Time Password(OTP) to users mobile number 
    and storing it in Firebase RealTime Database.
    Basic details such as Name, Age and State is is updated from the app and stored in Firebase RealTime Database.

Screens in the App:
    There are four screens shown in the app which are as follows -
    1) Login Screen
    2) Register User Screen
    3) Create Password Screen
    4) Dash-Board Screen

1) Login Screen:
    User is made to enter mobile number and a password as per user had register in the app and after a valid chack of the credentials from the firebase realtime database , the user is navigated to the dashboard screen.
2) Register User Screen:
    If the user is not registered and want to register the the user can navigate to register screen from the login screen by clicking on 'Register' button.
    Here user is allowed to enter mobile number after which the user will be taken to a re-captcha screen in browser where user is checked if its a bot or not.
    Otp is send to users mobile number and after entering the valid otp user is take to the create password screen.
3) Create Password Screen:
    Here user has to enter any combination of password of maximum length 15 and the password will be stored in the firebase realtime database.
    After storing of the password in database user is navigated to login screen ot enter the registered credentials.
4) Dash-Board Screen:
    Here user has to enter basic details as name, age, state and click on 'update', to update the fields in realtime time database.

Key Points:
1) If the user has not logged out and opens the app then user will be navigated to the dash-board screen.
2) If user has already filled the details in the dash-board screen then the details stored previously will be shown.

Common Components Used:
1) Toast Message:
    This component appears at the bottom of the screen where user is shown the errors or the messages occur in the app.
2) Activity Indicator:
    This shows an overlay indicator if there is a fetch or navigation operations going on.
3) Alert:
    This is showns as a pop up, where user is shown a message.

version details:
npm 7.11.2
pod 1.11.3

App working in both platforms iOS and Android

RealTime Database Structure:
    -details/   (storing user details w.r.t mobile number),     
    -users/     ( storing user's mobile number and password),   
    -online/    (it is created only when the user is logged in),    

dummy numbers for Testing:
	  	
Phone number> +91 55 5555 5555,	      Verification code> 555555	
Phone number> +91 33 3333 3333,	      Verification code> 333333	
Phone number> +91 12 3456 7890,	      Verification code> 123456	
Phone number> +91 44 4444 4444,	      Verification code> 444444	
Phone number> +91 22 2222 2222,	      Verification code> 222222	
Phone number> +91 11 1111 1111,	      Verification code> 111111	
Phone number> +91 88 8888 8888,	      Verification code> 888888	
