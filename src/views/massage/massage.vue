<template>
    <quill-editor ref="myTextEditor"
                  :content="content"
                  :options = "editorOption"
                  @change="onEditorChange($event)">
    </quill-editor>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor'
    export default {
        components: {
            quillEditor
        },
        data(){
            return{
                editorOption: {},
                content:''
            }
        },
        methods:{
            onEditorBlur(editor) {
                console.log('editor blur!', editor)
            },
            onEditorFocus(editor) {
                console.log('editor focus!', editor)
            },
            onEditorReady(editor) {
                console.log('editor ready!', editor)
            },
            onEditorChange({ editor, html, text }) {
                // console.log('editor change!', editor, html, text)
                this.content = html
            }
        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor
            }
        },
        mounted() {
            // you can use current editor object to do something(editor methods)
            console.log('this is my editor', this.editor)
            // this.editor to do something...
        }
    }


</script>

<style scoped>

</style>