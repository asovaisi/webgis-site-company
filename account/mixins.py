# class FormValidMixin():
# 	def form_valid(self, form):
# 		if self.request.user.is_superuser:
# 			form.save()
# 		else:
# 			self.obj = form.save(commit=False)
# 			self.obj.author = self.request.user
# 			if not self.obj.status == 'i':
# 				self.obj.status = 'd'
# 		return super().form_valid(form)