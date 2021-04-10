
        let minutos = document.getElementById("minutos")
        let segundos = document.getElementById("segundos")
        let tempo = document.getElementById("tempo")

        let segAtual, minAtual, intervalo

        for(let i = 0; i <= 60; i++){
            minutos.innerHTML += `<option class="listaMS" value="${i}">${i}</option>`
        }

        for(let i = 0; i <= 60; i++){
            segundos.innerHTML += `<option class="listaMS" value="${i}">${i}</option>`
        }

        tempo.innerHTML = `${minutos.value}:${segundos.value}`

        function cronoP(){
            clearInterval(intervalo)

            minAtual = minutos.value
            segAtual = segundos.value

            tempo.innerHTML = `${minAtual}:${segAtual}`

            intervalo = setInterval(function(){

                if(segAtual > 0){
                    segAtual--
                    tempo.innerHTML = `${minAtual}:${segAtual}`
                }

                else if(minAtual > 0 && segAtual == 0){
                    minAtual--
                    segAtual = 59
                    tempo.innerHTML = `${minAtual}:${segAtual}`
                }
                
                else {
                    clearInterval(intervalo)
                }

            },1000)
        }

        function pausa10(){
            minutos.value = 10
            segundos.value = 0

            cronoP()
        }

        function pausa20(){
            minutos.value = 20
            segundos.value = 0

            cronoP()
        }

        function zerar(){
            minutos.value = 0
            segundos.value = 0

            cronoP()
        }