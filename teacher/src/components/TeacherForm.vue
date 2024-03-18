<template>
    <section>
        <h3>Añadir Profesor</h3>
        <div><label for="">Nombre:</label> <input type="text" v-model="teacher.teacherName"></div>
        <div><label for="">Apellidos:</label> <input type="text" v-model="teacher.surname"></div>
        <div><label for="">DNI / NIF:</label> <input type="text" v-model="teacher.dni"></div>
        <div><label for="">Materias:</label> <input type="text" v-model="subjects"> <button @click="handleSubjest">Agregar</button></div>
        <div>
            <ul>
                <li v-for="(item,index) in teacher.subjects" :key="index">{{ item }}</li>
            </ul>
        </div>
        <input type="checkbox" v-model="teacher.doc">Documentacion Entregada
        <button @click="handleAddTeacher">Agregar</button>
    </section>
    <section>
        <h3>Listado de Profesores</h3>
        <table>
            <tr>
                
            </tr>
        </table>
    </section>
</template>

<script lang="ts" setup>
    import {Ref,ref} from 'vue'
    interface ITeacher{
        teacherName:string,
        surname:string,
        dni:string,
        subjects:Array<string>,
        doc:boolean

    }
    let teacher:Ref<ITeacher> = ref({
        teacherName:'',
        surname:'',
        dni:'',
        subjects:[],
        doc:false
    })

    let teachers:Ref<Array<ITeacher>> = ref([])
    let subjects:Ref<string> = ref('')

    const handleSubjest = () => {

        teacher.value.subjects.push(subjects.value)
        subjects.value=''
    }
    const handleAddTeacher = ()=>{
        teachers.value.push(teacher.value)
        teacher.value.teacherName=''
        teacher.value.surname=''
        teacher.value.dni=''
        teacher.value.doc=false
        teacher.value.subjects=[]
    }
</script>

<style scoped>
</style>