// @ts-nocheck
import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import video from 'netlify-cms-editor-component-video'
import AccordionControl from '../custom-widgets/accordion/AccordionControl'
import AccordionPreview from '../custom-widgets/accordion/AccordionPreview'

CMS.init()

CMS.registerEditorComponent(video)
CMS.registerWidget('accordion', AccordionControl, AccordionPreview);

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
console.log("CMSSSSSS")