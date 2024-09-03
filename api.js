document.addEventListener('DOMContentLoaded',function(){
    

    document.getElementById('btn_cat').addEventListener('click',catfact)
    document.getElementById('btn_number').addEventListener('click',number_fact)

    document.getElementById('btn_get').addEventListener('click',get)
    document.getElementById('btn_post').addEventListener('click',post)
    document.getElementById('btn_delete').addEventListener('click',delete1)

    document.getElementById('btn_get2').addEventListener('click',get2)
    document.getElementById('btn_post2').addEventListener('click',post2)
    document.getElementById('btn_delete2').addEventListener('click',delete2)
});

function catfact(){
    fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('gatofato').innerHTML = data.text;
    })
    .catch(error => console.error('erro:',error));
}

function number_fact(){
    let numero = document.getElementById('n_input').value
    fetch(`http://numbersapi.com/${numero}?json`)
    .then(response => response.json())
    .then(data => {[
        document.getElementById('number_p').innerHTML = data.text
    ]})
    .catch(error => console.error('erro:',error))
}

function get(){
    let div_get = document.getElementById('div_get')
    div_get.classList.remove('oculto')

    setTimeout(function(){
        div_get.classList.add('oculto')
    },10000)
}

function post(){
    let div_post = document.getElementById('div_post')
    div_post.classList.remove('oculto')

    setTimeout(function(){
        div_post.classList.add('oculto')
    },10000)
}

function delete1(){
    let div_delete = document.getElementById('div_delete')
    div_delete.classList.remove('oculto')

    setTimeout(function(){
        div_delete.classList.add('oculto')
    },10000)
}

function get2(){
    let id = document.getElementById('get_input').value
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => {
        document.getElementById('resultado').innerHTML = json.title
    })
    .catch(error => console.error('erro:',error))
}

function post2(){
    let user_id = document.getElementById('post_input').value
    let titulo = document.getElementById('post_input2').value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: `${titulo}`,
          body: 'PADRAO',
          userId: user_id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => {
        if (response.ok){
            document.getElementById('resultado').innerHTML = 'postado com sucesso!'
        }else{
            document.getElementById('resultado').innerHTML = 'erro ao postar!'
        }
    })
    .catch(error => console.error('erro:',error))
}

function delete2(){
    let id = document.getElementById('delete_input').value

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method : 'DELETE'})
    .then(response => {
        if (response.ok){
            document.getElementById('resultado').innerHTML = 'apagado com sucesso!'
        }else{
            document.getElementById('resultado').innerHTML = 'erro ao apagar!'
        }
    })
    .catch(error => console.error('erro:',error))
}