$(window).load(function () {
  $('.flexslider').flexslider({
    animation: 'slide',
    slideshow: false,
    start: function (slider) {
      $('body').removeClass('loading')
    }
  })
})

$(document).ready(function () {
  var index = 0,
    swatches = $('.color-circle'),
    smallPath = 'img/color/small/',
    largePath = 'img/color/',
    imagePath = largePath,
    carPNGHolder = $('.carHolder'),
    carBGHolder = $('.color-changer'),
    carColorInfo = [{
      name: 'Blue Candy',
      hex: '#097691',
      bg: '#b4dced',
      png: '14_FIES_BlueCandy.png'
    }, {
      name: 'Tuxedo Black',
      hex: '#000000',
      bg: '#909090',
      png: '14_FIES_TuxedoBlack.png'
    }, {
      name: 'Race Red',
      hex: '#E10010',
      bg: '#f6b4b9',
      png: '14_FIES_RaceRed.png'
    }, {
      name: 'Performance Blue',
      hex: '#16276D',
      bg: '#a0b4c9',
      png: '14_FIES_PerformanceBlue.png'
    }, {
      name: 'Green Envy',
      hex: '#789c09',
      bg: '#d7e2b7',
      png: '14_FIES_GreenEnvy.png'
    }, {
      name: 'Ruby Red',
      hex: '#A51A24',
      bg: '#caa7a9',
      png: '14_FIES_RubyRed.png'
    }, {
      name: 'Ingot Silver',
      hex: '#818181',
      bg: '#d0d0d0',
      png: '14_FIES_IngotSilver.png'
    }, {
      name: 'Oxford White',
      hex: '#989898',
      bg: '#EEEEEE',
      png: '14_FIES_OxfordWhite.png'
    }, {
      name: 'Storm Gray',
      hex: '#686460',
      bg: '#a1a0a1',
      png: '14_FIES_StormGrey.png'
    }, {
      name: 'Molten Orange',
      hex: '#c63f09',
      bg: '#eec7b7',
      png: '14_FIES_MoltonOrange.png'
    }]

  // $('.sync-btn').click(function(event) {
    // 	event.preventDefault()
    // 		$(window).scrollTop(4140)
    // 	$("html, body").stop().animate({ scrollTop: "4140px" }, 5000)
    // })

  function switchOutImages (ele) {
    var element = ele || $('.color-circle').eq(index)
    $('.color-circle-active').removeClass('color-circle-active')
    $('.view-gallery-btn').css('color', carColorInfo[index].hex)
    $('.view-gallery-btn').css('borderColor', carColorInfo[index].hex)
    $('.color-change').css('color', carColorInfo[index].hex)
    $('.carTempHolder').attr('src', imagePath + carColorInfo[index].png)
      .load(function () {
        carPNGHolder.stop().animate({
          opacity: '0'
        }, 300, function () {
          carPNGHolder.attr('src', imagePath + carColorInfo[index].png)
          carPNGHolder.stop().animate({
            opacity: 1
          })
        })
      })

    element.addClass('color-circle-active')
    /* 			carPNGHolder.attr('src', carColorInfo[$(this).index()].png); */
    carBGHolder.css('backgroundColor', carColorInfo[index].bg)
  }

  $('.color-circle').click(function (e) {
    index = $(this).index()
    e.preventDefault()
    switchOutImages($(this))
  })

  enquire.register('(max-width:768px)', function () {
    $('#swatches').appendTo($('#color-changer'))
    imagePath = smallPath
    switchOutImages()
  })

  enquire.register('(min-width:768px)', function () {
    $('#swatches').prependTo($('#color-changer'))
    imagePath = largePath
    switchOutImages()
  })
})
