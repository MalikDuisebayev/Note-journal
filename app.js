const app = new Vue({
	el: '#app',
	data:{
		answer: 'Добавьте свою первую заметку!',
		title: '',
		body: '',
		notes: []
	},
	methods:{
		saveBtn:function(){
			if(this.title && this.body){
			this.notes.push({title: this.title, body: this.body})
			this.title = ''
			this.body = ''
			}
			return this.answer = 'Одно из полей ввода пустое!'
		}
	},
	watch:{
		title : function(){
			this.answer = 'Печатаю...'
		},
		body : function(){
			this.answer = 'Печатаю...'
		}
	}
})