var userID={
    id:1753,
    name:"Яночка",
    age:"25",
    sex:0,
    education:"МИТСО, Международных и экономических отношений и менеджмента, 2015",
    address: "Минск, Ленинградская 14",
    ambition:1,
    like: 1944,
    unlike: 1302,
    verificationPhone:1,
    verificationVk:1,
    verificationFb:0,
    verificationVkFriends:238,
    verificationFbFriends:undefined,
    liked:0,
    images: [{ 'image': 'img/s1.jpg' },
        { 'image': 'img/s2.jpg' },
        { 'image': 'img/s3.jpg' },
        { 'image': 'img/s4.jpg' },
        { 'image': 'img/s5.jpg' },
        { 'image': 'img/s6.jpg' },
        { 'image': 'img/s7.jpg' }
    ]
};
var address;




angular.module('Dating', [])
    .controller('Slider', function($scope) {
        //Vars
        var noImage={images: [{ 'image': 'img/s0.jpg'}]};
        var like=0;
        var unlike=0;
        $scope.index=0;

        //Photos
        $scope.slideshow = 1;
        $scope.slideIndex=0;
        $scope.slides=(userID.images||noImage.images);
        if (userID.images===undefined) {
            $scope.slidesLength=0;
        } else {
            $scope.slidesLength=userID.images.length;
        }


        $scope.isActive= function (index) {
            return $scope.index === index;
        };
        $scope.showPrev = function () {
            if ($scope.index>0) {
                $scope.index--
            }
        };
        $scope.showNext = function () {
            if ($scope.index<($scope.slides.length - 1)) {
                $scope.index++
            } else {
                document.getElementById("presentPage").style.display="flex";
            }
        };




        $scope.photoScrollRight=function () {
            if ($scope.slides.length<5) {
                document.getElementsByClassName("photo-scroll-right")[0].style.display = "none";
            } else {
                if ($scope.slides.length < 10) {
                    for (var i = 0; i < ($scope.slides.length - 5); i++) {
                        document.getElementsByClassName("one-photo")[i].style.display = "none";
                        document.getElementsByClassName("photo-scroll-right")[0].style.display = "none";
                        document.getElementsByClassName("photo-scroll-left")[0].style.display = "flex";
                    }
                } else {
                    for (i = 0; i < 5; i++) {
                        document.getElementsByClassName("one-photo")[i].style.display = "none";
                        document.getElementsByClassName("photo-scroll-left")[0].style.display = "flex";
                    }
                }
            }
        };
        $scope.photoScrollLeft=function () {
            if ($scope.slides.length<5) {
                document.getElementsByClassName("photo-scroll-left")[0].style.display="none";
            } else {
                if ($scope.slides.length<10) {
                    for (var i=0;i<($scope.slides.length-5);i++) {
                        document.getElementsByClassName("one-photo")[i].style.display="block";
                        document.getElementsByClassName("photo-scroll-right")[0].style.display="flex";
                        document.getElementsByClassName("photo-scroll-left")[0].style.display="none";
                    }
                } else {
                    for (i=0;i<5;i++)
                        document.getElementsByClassName("one-photo")[i].style.display="block";
                    document.getElementsByClassName("photo-scroll-right")[0].style.display="flex";
                    document.getElementsByClassName("photo-scroll-left")[0].style.display="none";
                }
            }


        };

        //Name
        $scope.name=(userID.name||"Пользователь не указал имя");

        //Age
        $scope.age=(userID.age||"");
        if ($scope.age!=="") {
            $scope.age=", "+$scope.age
        }

        //Education
        $scope.education=(userID.education||"Пользователь не указал эти данные");
        if ($scope.education.length>45) {
            $scope.headEducation=$scope.education.slice(0,45)+'...';
        } else {
            $scope.headEducation=$scope.education;
        }

        //Status
        var status=Math.floor(Math.random() * 3);
        if (status==0) {
            $scope.status="lightgray";
        } else {
            if (status==1) {
                $scope.status="orange";
                $scope.statusshow=String(Math.floor(Math.random() * 2));
            } else {
                $scope.status="green";
                $scope.statusshow=String(Math.floor(Math.random() * 2));
            }
        }

        //Address
        $scope.address=(userID.address||"Пользователь не указал свой адрес");
        address=$scope.address;

        //Likes
        $scope.like=(userID.like||0);
        $scope.unlike=(userID.unlike||0);
        if (userID.liked===1) {
            like=0;
            unlike=1;
            document.getElementById("unlike").classList.add("unliked");
        } else {
            if (userID.liked===2) {
                like=1;
                unlike=0;
                document.getElementById("like").classList.add("liked");
            }
        }

        $scope.ratingResult=((Math.round($scope.like*1000/($scope.like+$scope.unlike)))/100||0);
        $scope.notGap=String(Math.round(209*$scope.ratingResult/10));
        $scope.gap=String(Math.round(209-$scope.notGap));
        $scope.notGap=($scope.notGap+" "+$scope.gap);

        $scope.likeIt=function () {
            if (like===0) {
                like++;
                document.getElementById("like").classList.add("liked");
                document.getElementById("unlike").classList.remove("unliked");
                userID.like++;
                if (unlike!==0) {
                    unlike--;
                    userID.unlike--;
                }
                $scope.like=(userID.like||0);
                $scope.unlike=(userID.unlike||0);
            }
        };
        $scope.unlikeIt=function () {
            if (unlike===0) {
                unlike++;
                document.getElementById("unlike").classList.add("unliked");
                document.getElementById("like").classList.remove("liked");
                userID.unlike++;
                if (like!==0) {
                    like--;
                    userID.like--;
                }
                $scope.like=(userID.like||0);
                $scope.unlike=(userID.unlike||0);
            }
        };

        //Verification
        if (userID.verificationPhone===1) {
            $scope.phoneDisplay=true;
        } else {
            $scope.phoneDisplay=false;
        }
        if (userID.verificationVk===1) {
            $scope.vkDisplay=true;
            $scope.vkFriends=(userID.verificationVkFriends||"0");
        } else {
            $scope.vkDisplay=false;
        }
        if (userID.verificationFb===1) {
            $scope.fbDisplay=true;
            $scope.fbFriends=(userID.verificationFbFriends||"0");
        } else {
            $scope.fbDisplay=false;
        }
        if ((userID.verificationPhone===0)||(userID.verificationPhone===undefined)) {
            if ((userID.verificationVk===0)||(userID.verificationVk===undefined)) {
                if ((userID.verificationFb===0)||(userID.verificationFb===undefined)) {
                    $scope.noVerification="Пользователь не подтвердил никаких контактных данных"
                }
            }
        }

        //Sex
        if (userID.sex===0) {
            $scope.sexLike="Она понравилась";
            $scope.sexTalk="ней";
            $scope.sexPresent="ей"
        } else {
            $scope.sexLike="Он понравился";
            $scope.sexTalk="ним";
            $scope.sexPresent="ему"
        }

        //Ambitions
        if (userID.ambition===1) {
            $scope.ambition="Хочет общаться"
        } else {
            if (userID.ambition===2) {
                $scope.ambition="Хочет дружить"
            } else {
                if (userID.ambition===3) {
                    $scope.ambition="Хочет встречаться"
                } else {
                    $scope.ambition="Пользователь не указал своей цели"
                }
            }
        }

        //SuperLike
        $scope.superLike=function () {
            alert("Суперлайк")
        };

        //Present
        $scope.present=function () {
            alert("Подарок")
        };

        //Report
        $scope.report=function () {
            alert("Отправлена жалоба. ID пользователя: "+userID.id+" ID изображения: "+$scope.index)
        };

        //Keyboard control
        document.addEventListener('keydown',function (e) {
            if (e.keyCode===39||e.keyCode===32) {
                if ($scope.index<($scope.slides.length - 1)) {
                    $scope.index++
                } else {
                    document.getElementById("presentPage").style.display="flex";
                }
            }
            if (e.keyCode===37) {
                if ($scope.index>0) {
                    $scope.index--
                }
            }
            if (e.keyCode===49) {
                if (like===0) {
                    like++;
                    document.getElementById("like").classList.add("liked");
                    document.getElementById("unlike").classList.remove("unliked");
                    userID.like++;
                    if (unlike!==0) {
                        unlike--;
                        userID.unlike--;
                    }
                    $scope.like=(userID.like||0);
                    $scope.unlike=(userID.unlike||0);
                }
            }
            if (e.keyCode===50) {

                if (unlike===0) {
                    unlike++;
                    document.getElementById("unlike").classList.add("unliked");
                    document.getElementById("like").classList.remove("liked");
                    userID.unlike++;
                    if (like!==0) {
                        like--;
                        userID.like--;
                    }
                    $scope.like=(userID.like||0);
                    $scope.unlike=(userID.unlike||0);
                }
            }
            if (e.keyCode===51) {
                alert("Суперлайк")
            }
        })
    });
