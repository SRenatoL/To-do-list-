const setTagAsDone = async (element, id) => { //element e o campo que vai ser alterado

    event.preventDefault();
    try {
        let headers = new Headers({ 'Content-Type' : 'application/json'});
        let body = JSON.stringify({ task: {done: element.checked }});
        let response = await fetch(`/tasks/${id}?_method=put`, { headers: headers, body: body, method: 'PUT' });
        let data = await response.json();
        let task = data.task;
        let parent = element.parentNode; //busca a div que o input esta
        if(task.done){
            element.checked = true
            parent.classList.add('has-text-success'); //o if na pagina e so para quando a pagina for criada
            parent.classList.add("is-italic"); //nesse caso essas linhas são para quando as tasks foram concluidas
        }else{
            element.checked = false
            parent.classList.remove('has-text-success'); 
            parent.classList.remove("is-italic");
        }
    } catch (error) {
        alert('erro ao atualizar a tarefa')
    }
}