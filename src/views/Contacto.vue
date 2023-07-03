<template>
    <div class="container">
    <h1> Contacto </h1>
    <p>Para contactarnos puedes escribirnos</p>
    <form action="">
        <div class="input-group">
            <label for="nombre">Nombre Completo:</label>
            <input type="text">
        </div>
        <div class="input-group">
            <label for="correo">Correo Electronico:</label>
            <input type="text">
        </div>
        <div class="input-group">
            <label for="message">Mensaje:</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button class="btn">Enviar</button>
    </form>
    </div>
</template>

<script>
export default {
    name: 'contacto-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    //watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .container{
        width: 60%;
        margin: 0 auto;
        color: white;
    }
    .input-group{
        display: flex;
        flex-direction: column;
    }
    .input-group input{
        width: 60%;
    }
    h1 {
        text-align: center;
    }
    p {
        text-align: center;
        margin-bottom: 40px;
    }
    .btn {
        background-color: #29b129;
        color: white;
        display: inline-block;
        width: 25%;
        padding: 10px;
    }
</style>