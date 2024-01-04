
const mongoose = require('mongoose');
const slugify = require('slugify');
const DOMPurify = require('dompurify');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
  productionOrderId: {
    type: String,
    required: true,
  },
  fileUpload: {
    type: String, 
    required: false,
  },
  textArea: {
  type: String

  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    unique: true
  },
  sanitizedHtml: {
    type: String,
    required: false
  }});

formSchema.pre('validate', function(next) {
if (this.name) {
  const timestamp= Date.now();
  this.slug = slugify( `${this.title} -${timestamp}`, { lower: true, strict: true })
};

if (this.textArea) {
  this.sanitizedHtml = DOMPurify.sanitize(this.description)
}

next()
})

const FormModel = mongoose.model('Form', formSchema);

module.exports = FormModel;
