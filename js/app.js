(function(){
	var app = angular.module('lasdb', [], function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
	

	app.controller('NewsController', function(){
		this.mNoticias =noticias;
	});

	/* EMPTY NEWS FOR NEW ENTRY
	 {
	 title:'',
	 date:'26/6/16',
	 subtitle: '',
	 body: '',
	 imageSm: '',
	 imageBg: '',
	 URL: ''
	 },
	 */


	var noticias = [
	{
		title:'Eddy De Robertis, Doctor Honoris Causa at UdelaR, Uruguay',
		date:'1/9/16',
		subtitle: '',
		body: 'On September 1st  Professor Eddy de Robertis was granted the Doctor Honoris Causa degree by the Universidad de la República in Montevideo, Uruguay, for his  outstanding role in the development of Medical Sciences in Uruguay and his scientific contributions with worldwide impact to universal knowledge.  Eddy de Robertis is Distinguished Professor and Norman F. Sprague Chair of Molecular Oncology at the Department of Biological Chemistry, University of California, Los Angeles (UCLA), and Investigator of the Howard Hughes Medical Institute. He devoted his professional life to investigate the molecular mechanisms of embryonic development, has been one of the main mentors of the LASDB when the Society was created in 2003, and currently he is a very active member of the External Board of our Society. Congratulations Eddy!!',
		imageSm: 'img/news/DeRobertis-sm.jpg',
		imageBg: '../img/news/DeRobertis-bg.jpg',
		URL:'http://www.universidad.edu.uy/prensa/renderItem/itemId/39442/refererPageId/12' 
	},
	{
		title:'Argentina: Workshop Developmental and Cellular Biology',
		date:'1/6/16',
		subtitle: 'October 27-29, 2016. Chascomus, Buenos Aires, Argentina',
		body: 'Taller de Biología Celular y del Desarrollo',
		imageSm: 'img/news/chas-sm.jpg',
		imageBg: '../img/news/chas-bg.jpg',
		URL:'http://tallerbcd.wix.com/tallerbcd' 
	},
	{
		title:'Latin American Zebrafish Course',
		date:'1/6/16',
		subtitle: 'IV LAZEN Course. Porto Alegre, Brazil. December 5-10th, 2016.',
		body: 'The main aims of the network are to promote the use of the experimental model, to facilitate the exchange materials and to foster advanced training of young scientists in the region.',
		imageSm: 'img/news/lazen-sm.jpg',
		imageBg: '../img/news/lazen-bg.jpg',
		URL: 'http://lazen.fcien.edu.uy/home'
	},
	{
		title:'Expanding C. elegans research:  First Latin American Worm Meeting',
		date:'10/9/16',
		subtitle: 'February 22nd to 24th, 2017.  Institut Pasteur, Montevideo, Uruguay.',
		body: 'The Objectives of the Meeting are: to integrate a Latin American Worm Community, to provide an integrated and updated view on C.elegans research, to encourage discussion and foster collaborations among our labs, to provide knowledge on cutting edge methodologies and technologies for worm research. Check meeting webpage for confirmed speakers and important deadlines. ICGEB grants are available for students/young researchers',
		imageSm: 'img/news/worm-sm.jpg',
		imageBg: '../img/news/worm-bg.jpg',
		URL: 'http://pasteur.uy/en/last-news/first-latin-american-worm-meeting'
	},
	{
		title:'Small Brains, Big Ideas: Practical Course',
		date:'26/6/16',
		subtitle: 'November 10th to 19th, 2016. Universidad de Chile, Universidad de Valparaiso',
		body: 'Deadline for applications: July 30th, 2016. The course will consist of lectures and hands'+'-'+'on laboratory exercises that will expose Latin­American students and junior Faculty to the use of invertebrates model systems in modern neuroscience and biomedical research.',
		imageSm: 'img/news/smallbrain-sm.jpg',
		imageBg: '../img/news/smallbrain-bg.jpg',
		URL: 'http://www.smallbrains.org'
	},
	{
		title:'Funding for model' + "-" + 'organism databases in trouble',
		date:'26/6/16',
		subtitle: 'Support Model Organism Databases',
		body: 'NHGRI which supports FlyBase, WormBase, ZFIN, and the Mouse Genome Database has proposed a change in their funding approach. We encourage you to read the letter and show your support by signing it.',
		imageSm: 'img/news/MODs-sm.jpg',
		imageBg: '../img/news/MODs-bg.jpeg',
		URL: 'http://www.genetics­gsa.org/MODsupport'
	},
	{
		title:'SDB Annual Meeting',
		date:'1/6/16',
		subtitle: 'Boston, MA, USA. August 4 - 8, 2016',
		body: 'Society for Developmental Biology 75th Annual Meeting',
		imageSm: 'img/news/SDB-sm.png',
		imageBg: '../img/news/SDB-bg.jpg',
		URL:'http://www.sdbonline.org/2016mtg'
	},
	{
		title:'ISDB Meeting 2017',
		date:'1/6/16',
		subtitle: '18th International Congress of Developmental Biology. Singapore. 18 - 22 June 2017',
		body: 'International Society for Developmental Biology Meeting',
		imageSm: 'img/news/isdb-sm.png',
		imageBg: '../img/news/isdb-bg.png',
		URL:'http://isdb2017.com/'
	}
	]


	app.controller('JobController', function(){
		this.jobs = jobList;
	});

var jobList = [
	{
		title:'Doctoral position, Sao Paulo',
		date:'12/08/16',
		subtitle: 'EvoDevo lab in São Paulo (IB-USP, Brazil)',
		body: 'Please submit your letter of interest, updated CV, and contact information of three references to Federico Brown (fdbrown@usp.br) http://zoologia.ib.usp.br/evodevo2/',
		URL: 'https://www.dropbox.com/s/sevb440pdbz1m9g/flier_DD2017-FDB_v2.pdf?dl=0'
	},
	{
		title:'Postdoc Univ. Católica de Chile',
		date:'2/8/16',
		subtitle: 'Investigador Postdoctoral',
		body: 'Para trabajar en “Función de Lin28 y la hormona tiroidea en el desarrollo perinatal de ratón”. ' +
			  'Los interesados dirigir CURRICULUM VITAE y PUBLICACIONES a: '+
			  'Juan Larraín jlarrain@bio.puc.cl', 
		par2: 'P. Universidad Católica de Chile. ' +
			  'Laboratorio de Biología del Desarrollo y Regeneración. '+
			  'Facultad de Ciencias Biológicas',
		URL: 'http://laboratoriolarrain.uc.cl/people.html'
	},
	{
		title:'Postdoc Positions in Chile',
		date:'1/6/16',
		subtitle: 'VISUAL D Postdoctoral Positions 2016',
		body: 'VISUAL-D, a recently formed research initiative funded by the Chilean government for the visualisation and manipulation of signal and forces in developing tissues, is seeking proactive candidates with experience in developmental biology and/or morphogenesis, ideally (but not required) in zebrafish, willing to create new projects that associate developmental biology/morphogenesis with mathematics/computing/physics in a trans disciplinary scientific environment. Applicants must be about to finish or have a Ph.D. (awarded within the last 4 years) and a demonstrated track record of publications. To apply, applicants should send a full CV and a short statement of research interests to Prof. Miguel Concha (mconcha@med.uchile.cl) by July 1st 2016.For more information, please download the pdf file (https://www.dropbox.com/s/az4m2x7lubg2r0g/Postdoc%20anouncement_VisualD%2016May2016.pdf?dl=0)'
	},
	{
		title:'See Job Opportunities at The Node',
		date:'',
		URL: 'http://thenode.biologists.com/category/jobs'
	},
	{
		title:'See Job Opportunities at SDB',
		date:'',
		URL: 'http://www.sdbonline.org/job_opportunities'
	}
	]


})();