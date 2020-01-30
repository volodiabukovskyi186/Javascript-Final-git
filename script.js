$(function () {
    const f1 = document.forms['f1']
    const text_colors = document.getElementById('text_colors')
    const back_colors = document.getElementById('back_colors')
    const back_image = document.getElementById('back_image')
    const mainContent = document.getElementById('mainContent')
    let bold = false
    let ul 
    let ol
    $('#bold').click(() => {
        if (bold == false) {
            $('#mainContent').css({
                fontWeight: 'bold',
            })
            bold = true
        }
        else if (bold == true) {
            $('#mainContent').css({
                fontWeight: 'normal',
            })
            bold = false
        }
    })
    let italic = false
    $('#italic').click(() => {
        if (italic == false) {
            $('#mainContent').css({
                fontStyle: 'italic'
            })
            italic = true
        }
        else if (italic == true) {
            $('#mainContent').css({
                fontStyle: 'normal'
            })
            italic = false
        }
    })
    let undeline = false
    $('#undeline').click(() => {
        if (undeline == false) {
            $('#mainContent').css({
                textDecoration: 'underline'
            })
            undeline = true
        }
        else if (undeline == true) {
            $('#mainContent').css({
                textDecoration: 'none'
            })
            undeline = false
        }
    })
    let linethrow = false
    $('#linethrow').click(() => {
        if (linethrow == false) {
            $('#mainContent').css({
                textDecoration: 'line-through'
            })
            linethrow = true
        }
        else if (linethrow == true) {
            $('#mainContent').css({
                textDecoration: 'none'
            })
            linethrow = false
        }
    })
    //align text=>
    const left = document.getElementById('left')
    const center = document.getElementById('center')
    const right = document.getElementById('right')
    let alignmas = [left, center, right]
    alignmas.forEach(function (value, index, arr) {
        alignmas[index].onclick = function () {
            $('#mainContent').css({
                textAlign: alignmas[index].value
            })
            
        }
        //<=align text
    })
    //fontStyle=>
    fontmas = ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Time', 'Verdana']
    fontmas.forEach(function (value, index, arr) {
        $(`.${fontmas[index]}`).click(() => {
            $('#mainContent').css({
                fontFamily: fontmas[index]
            })
        })
    })
    //<=fontStyle
    //fontSize=>
    let masSize = ['12px', '14px', '16px', '18px', '20px', '22px', '25px', '30px']
    masSize.forEach(function (value, index, arr) {
        $(`.${masSize[index]}`).click(() => {
            $('#mainContent').css({
                fontSize: masSize[index]
            })
        })
    })
    //<=fontSize
    let colors
    let mas = []
    for (let i = 0; i < 28; i++) {
        colors = document.createElement('div')
        text_colors.appendChild(colors)
        colors.style.width = '65px'
        colors.style.height = '65px'
        colors.style.borderRadius = '5px'
        mas.push(colors)
    }
    for (let i = 0; i < 21; i++) {
        let r = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)
        let a = Math.round(Math.random() * 255)
        mas[i].style.background = `rgba(${r},${b},${a})`
        mas[0].style.background = 'black'
        mas[0].style.border = 'solid 1px silver'
        $(mas[i]).click(() => {
            $('#mainContent').css({
                color: `rgba(${r},${b},${a})`
            })
            $(ul).css({
                color: `rgba(${r},${b},${a})`
            })
            $(ol).css({
                color: `rgba(${r},${b},${a})`
            })
          
        })
        $(mas[0]).click(() => {
            $('#mainContent').css({
                color: `black`
            })
        })
    }
    //textColor=>
    let backgroundC
    let masB = []
    for (let i = 0; i < 28; i++) {
        backgroundC = document.createElement('div')
        back_colors.appendChild(backgroundC)
        backgroundC.style.width = '60px'
        backgroundC.style.height = '60px'
        backgroundC.style.borderRadius = '5px'
        backgroundC.style.marginTop = '5px'
        backgroundC.style.marginLeft = '5px'
        masB.push(backgroundC)
    }
    for (let i = 0; i < 21; i++) {
        let r = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)
        let a = Math.round(Math.random() * 255)
        masB[i].style.background = `rgba(${r},${b},${a})`
        masB[0].style.border = 'solid 1px silver'
        $(masB[i]).click(() => {
            $('body').css({
                background: `rgba(${r},${b},${a})`
            })
        })
    }
    //<=textColor
    //backgroundgolor=>
    $('#backgroundCol').click(() => {
        $('#back_colors').css({
            display: 'flex'
        })
        $('#back_image').css({
            display: 'none'

        })
        $('#download').css({
            display: 'none'
        })
    })
    let pictures
    let masimg = []
    $('#image').click(() => {

        $('#download').css({
            display: 'none'
        })
        $('#back_colors').css({
            display: 'none'
        })
        $('#back_image').css({
            display: 'flex',
            marginLeft: '15px'
        })
    })
    for (let i = 0; i <= 9; i++) {
        pictures = document.createElement('div')
        pictures.style.width = '25%'
        pictures.style.height = '80px'
        pictures.style.marginLeft = '20px'
        pictures.style.marginTop = '5px'
        back_image.appendChild(pictures)
        masimg.push(pictures)
    }
    for (let i = 0; i < 9; i++) {
        masimg[i].style.background = `url(img/${i}.jpg)`
        $(masimg[i]).click(() => {
            $('body').css({

                background: `url(${i}.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            })
        })
    }
    $('#file').click(() => {
        $('#download').css({
            display: 'inline-block'
        })
        $('#back_colors').css({
            display: 'none'
        })

        $('#back_image').css({
            display: 'none'
        })
    })
    $('#inpFile').change(() => {
        console.log(event.target.files)
        const url = URL.createObjectURL(event.target.files[0])
        console.log(url)
        $('body').css({
            background: ` url(${url})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        })
    })
    //<=backgroundgolor
    //sing in and unlock table,ol,li menu=>
    let log = false;
    let pas = false;
    $("#icode").prop('disabled', true);
    f1.login.oninput = function () {
        let login = f1.login.value
        if (login == 'admin') {
            f1.login.style.border = 'solid 2px green'
            log = true;
        }
        else {
            f1.login.style.border = 'solid 2px red'
            log = false;
        }
        if (log == true && pas == true) {
            $("#sing_in").prop('disabled', false);
            $("#icode").prop('disabled', false);
        }
        else {
            $("#sing_in").prop('disabled', true);
        }
    }
    $("#sing_in").prop('disabled', true);
    f1.password.oninput = function () {
        let password = f1.password.value
        if (password == 'admin') {
            f1.password.style.border = 'solid 2px green'
            pas = true;
        }
        else {
            f1.password.style.border = 'solid 2px red'
            pas = false;
        }
        if (log == true && pas == true) {
            $("#sing_in").prop('disabled', false);
        }
        else {
            $("#sing_in").prop('disabled', true);
        }
    }
    $("#sing_in").click(() => {
        $("#icode").prop('disabled', false);
    })
    //<=sing in and unlock table,ol,li menu
    //code Menu=>
    let masCloseMenu = ['icode', 'secondMenu', 'thirdMenu', 'fourMenu', 'fiveMenu', 'mainContent']
    masCloseMenu.forEach(function (value, index, arr) {
        $(`#icode`).click(() => {
            let a = mainContent.innerHTML
            area.value = a;
            $('#area').css({
                display: 'inline-block'
            })

            $('#scriptBar').css({
                display: 'inline-block'
            })
            $('#codeContainer').css({
                display: 'inline-block'
            })
          
            $(`#${masCloseMenu[index]}`).css({
                display: 'none'
            })
        })
    })
    //<=code Menu
    $('#mainPage').click(() => {
        let b = area.value
        mainContent.innerHTML = b;
        $('#icode').css({
            display: 'inline-block'
        })
        $('#secondMenu').css({
            display: ' inline-flex'
        })
        $('#thirdMenu').css({
            display: ' inline-flex'
        })
        $('#fourMenu').css({
            display: ' inline-flex'
        })
        $('#fiveMenu').css({
            display: 'inline-block'
        })
        $('#mainContent').css({
            display: 'inline-block'
        })
        $('#codeContainer').css({
            display: 'none'
        })
        $('#scriptBar').css({
            display: 'none'
        })
    })
    //   Table menu;/////////////////////
    f1.resetTB.onclick = function () {
        f1.countTR.value = ''
        f1.widthTD.value = ''
        f1.borderWidth.value = ''
        f1.countTD.value = ''
        f1.heightTR.value = ''
        f1.type_border.value = ''
        f1.color_border.value = ''
    }
    let masInpTB = []
    masInpTB.push(f1.countTR, widthTD, borderWidth, countTD, heightTR)
    $('#creteTB').click(() => {
        let countTR = f1.countTR.value
        let regTBfirst = /^[0-9]{1,3}$/
        countTR = regTBfirst.test(countTR)

        let widthTD = f1.widthTD.value
        let regTBsecond = /^[0-9]{1,3}$/
        widthTD = regTBsecond.test(widthTD)

        let borderWidth = f1.borderWidth.value
        let regTBthird = /^[0-9]{1,2}$/
        borderWidth = regTBthird.test(borderWidth)

        let countTD = f1.countTD.value
        let regTBfour = /^[0-9]{1,3}$/
        countTD = regTBfour.test(countTD)

        let heightTR = f1.heightTR.value
        let regTBfive = /^[0-9]{1,3}$/
        heightTR = regTBfive.test(heightTR)

        if (countTR == true) {
            f1.countTR.style.border = 'solid green 2px'
        }
        if (widthTD == true) {
            f1.widthTD.style.border = 'solid green 2px'
        }
        if (borderWidth == true) {
            f1.borderWidth.style.border = 'solid green 2px'
        }
        if (countTD == true) {
            f1.countTD.style.border = 'solid green  2px'
        }
        if (heightTR == true) {
            f1.heightTR.style.border = 'solid green 2px'
        }
        if (countTR == false) {
            f1.countTR.style.border = 'solid red 2px'
        }
        if (widthTD == false) {
            f1.widthTD.style.border = 'solid red 2px'
        }
        if (borderWidth == false) {
            f1.borderWidth.style.border = 'solid red 2px'
        }
        if (countTD == false) {
            f1.countTD.style.border = 'solid red  2px'
        }
        if (heightTR == false) {
            f1.heightTR.style.border = 'solid red 2px'
        }
        if (countTR == true && widthTD == true && borderWidth == true && countTD == true && heightTR == true) {
            $('#creteTB').attr("data-dismiss", "modal");
            let table1 = document.createElement('table')
            table1.style.display = 'inline-block'
            table1.style.width='100%'
            table1.style.float = 'left'
            let trT = f1.countTR.value
            let widTd = f1.widthTD.value
            let bordwid = f1.borderWidth.value
            let tdT = f1.countTD.value
            let heiT = f1.heightTR.value
            let bordType = f1.type_border.value
            let bordCol = f1.color_border.value

            for (let i = 0; i <= trT; i++) {
                let tr = document.createElement('tr')
                table1.appendChild(tr)
                for (let j = 0; j < tdT; j++) {
                    let td = document.createElement('td')
                    td.style.width = widTd + 'px'
                    td.style.height = heiT + 'px'
                    td.textContent = "TD";
                    td.style.borderWidth = bordwid + 'px;'
                    td.style.borderColor = bordCol
                    td.style.borderStyle = bordType
                    tr.appendChild(td)
                }
                mainContent.appendChild(table1)
            }
            let mainValue = mainContent.innerHTML
            area.value = mainValue;
        }
    })
    // <=  Table menu end;/////////////////////
    // ol menu=>
 
    f1.resetOl.onclick = function () {
        f1.countOl.value = ''
    }
    f1.creteOl.onclick = function () {
        let Cli = f1.countOl.value
        let Pli = f1.typeMaskOl.value;
        let Olfirst = f1.countOl.value
        let regOlfirst = /^[0-9]{1,3}$/
        Olfirst = regOlfirst.test(Olfirst)
        if (Olfirst == false) {
            f1.countOl.style.border = 'solid red 2px'
        }
        if (Olfirst == true) {
            f1.countOl.style.border = 'solid green 2px'
            let ol = document.createElement('ol')
            ol.style.float = 'left'
            ol.style.marginRight = '70%'
            for (let i = 0; i <= Cli; i++) {
                let li = document.createElement('li')
                li.innerHTML = `item ${i}`
                li.style.listStyle = Pli;
                // li.style.color = 'black'
                ol.appendChild(li)
            }
            mainContent.appendChild(ol)
            mainContent.style.paddingLeft = '20px'
            mainValue = mainContent.innerHTML
            area.value = mainValue;
        }
    }
    //<=create OL
    //create Ul=>
    f1.resetUl.onclick = function () {
        f1.countUl.value = ''
    }
    f1.creteUl.onclick = function () {
     
        let CUl = f1.countUl.value
        let PUl = f1.countUl.value;
        let countUl = f1.countUl.value
        let regULfirst = /^[0-9]{1,3}$/
        countUl = regULfirst.test(countUl)
        if (countUl == false) {
            f1.countUl.style.border = 'solid red 2px'
        }
        if (countUl == true) {
            f1.countUl.style.border = 'solid green 2px'
           ul = document.createElement('ul')
            ul.style.float = 'left'
            ul.style.marginRight = '70%'
            for (let i = 0; i <= CUl; i++) {
                let li = document.createElement('li')
                li.innerHTML = `item ${i}`
                li.style.listStyle = PUl;
               
                ul.appendChild(li)
            }
            mainContent.appendChild(ul)
            mainContent.style.paddingLeft = '20px'
            mainValue = mainContent.innerHTML
            area.value = mainValue;
           
        }
    }
})

