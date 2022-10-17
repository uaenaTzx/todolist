var selectBox = document.getElementsByClassName('selectBox')[0];
		var Select = document.getElementsByClassName('select')[0];
		var selectText = document.getElementsByClassName('selectText')[0];
		var option = document.getElementsByClassName('selectOption')[0];
		var option1 = document.getElementsByClassName('selectOption1')[0];
		var option2 = document.getElementsByClassName('selectOption2')[0];
		// 点击select
		Select.onclick = function(){
			option.style.display = 'block'
		}
		// 鼠标移除
		selectBox.onmouseleave = function(){
			option.style.display = 'none'
		}
		option1.onclick = function(){
			option.style.display = 'none'
			selectText.innerHTML = '商机'
		}
		option2.onclick = function(){
			option.style.display = 'none'
			selectText.innerHTML = '采购商'
		}
