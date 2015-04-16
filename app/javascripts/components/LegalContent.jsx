'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var LegalContent = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  render: function () {
    return (
      <section>
        <div className="container rich-text narrow">
          <h1>Quid in isto egregio tuo officio et tanta fide-sic enim existimo-ad corpus refers?</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href='http://loripsum.net/' target='_blank'>Sed quid sentiat, non videtis.</a> <i>Si id dicis, vicimus.</i> <b>Quid ad utilitatem tantae pecuniae?</b> Duo Reges: constructio interrete. <mark>Etiam beatissimum?</mark> Qua ex cognitione facilior facta est investigatio rerum occultissimarum. </p>

          <h2>Velut ego nunc moveor.</h2>

          <p><b>Vide, quaeso, rectumne sit.</b> Hoc tu nunc in illo probas. Completur enim et ex eo genere vitae, quod virtute fruitur, et ex iis rebus, quae sunt secundum naturam neque sunt in nostra potestate. Et harum quidem rerum facilis est et expedita distinctio. Sunt enim quasi prima elementa naturae, quibus ubertas orationis adhiberi vix potest, nec equidem eam cogito consectari. <mark>Optime, inquam.</mark> Se dicere inter honestum et turpe nimium quantum, nescio quid inmensum, inter ceteras res nihil omnino interesse. Ita graviter et severe voluptatem secrevit a bono. Crasso, quem semel ait in vita risisse Lucilius, non contigit, ut ea re minus agelastoj ut ait idem, vocaretur. Teneo, inquit, finem illi videri nihil dolere. Paulum, cum regem Persem captum adduceret, eodem flumine invectio? </p>

          <h3>At quicum ioca seria, ut dicitur, quicum arcana, quicum occulta omnia?</h3>

          <p>Nec tamen ullo modo summum pecudis bonum et hominis idem mihi videri potest. <b>Ut pulsi recurrant?</b> Omnium enim rerum principia parva sunt, sed suis progressionibus usa augentur nec sine causa; Et hanc quidem primam exigam a te operam, ut audias me quae a te dicta sunt refellentem. Nihilne te delectat umquam -video, quicum loquar-, te igitur, Torquate, ipsum per se nihil delectat? Sed quid ages tandem, si utilitas ab amicitia, ut fit saepe, defecerit? <a href='http://loripsum.net/' target='_blank'>An potest cupiditas finiri?</a> Id quaeris, inquam, in quo, utrum respondero, verses te huc atque illuc necesse est. Immo sit sane nihil melius, inquam-nondum enim id quaero-, num propterea idem voluptas est, quod, ut ita dicam, indolentia? Magni enim aestimabat pecuniam non modo non contra leges, sed etiam legibus partam. </p>

          <ul>
            <li>Se dicere inter honestum et turpe nimium quantum, nescio quid inmensum, inter ceteras res nihil omnino interesse.</li>
            <li>Istam voluptatem perpetuam quis potest praestare sapienti?</li>
            <li>Hoc uno captus Erillus scientiam summum bonum esse defendit nec rem ullam aliam per se expetendam.</li>
            <li>Tenent mordicus.</li>
            <li>Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum.</li>
            <li>Nam nec vir bonus ac iustus haberi debet qui, ne malum habeat, abstinet se ab iniuria.</li>
          </ul>


          <p>Quae cum magnifice primo dici viderentur, considerata minus probabantur. Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. Quid enim tanto opus est instrumento in optimis artibus comparandis? Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret. Cuius etiam illi hortuli propinqui non memoriam solum mihi afferunt, sed ipsum videntur in conspectu meo ponere. His similes sunt omnes, qui virtuti student levantur vitiis, levantur erroribus, nisi forte censes Ti. Memini vero, inquam; Ne id quidem, nisi multa annorum intercesserint milia, ut omnium siderum eodem, unde profecta sint, fiat ad unum tempus reversio. <mark>Ut aliquid scire se gaudeant?</mark> Multoque hoc melius nos veriusque quam Stoici. At enim, qua in vita est aliquid mali, ea beata esse non potest. Nobis Heracleotes ille Dionysius flagitiose descivisse videtur a Stoicis propter oculorum dolorem. </p>

          <p><a href='http://loripsum.net/' target='_blank'>Et quidem, inquit, vehementer errat;</a> Quicquid porro animo cernimus, id omne oritur a sensibus; <a href='http://loripsum.net/' target='_blank'>Beatus sibi videtur esse moriens.</a> Satis est tibi in te, satis in legibus, satis in mediocribus amicitiis praesidii. Scio enim esse quosdam, qui quavis lingua philosophari possint; Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Non perfecti autem homines et tamen ingeniis excellentibus praediti excitantur saepe gloria, quae habet speciem honestatis et similitudinem. <a href='http://loripsum.net/' target='_blank'>Ut pulsi recurrant?</a> Nam neque virtute retinetur ille in vita, nec iis, qui sine virtute sunt, mors est oppetenda. <a href='http://loripsum.net/' target='_blank'>Ea possunt paria non esse.</a> </p>

          <dl>
            <dt><dfn>Si longus, levis;</dfn></dt>
            <dd>Nunc haec primum fortasse audientis servire debemus.</dd>
            <dt><dfn>Quid iudicant sensus?</dfn></dt>
            <dd>Quaerimus enim finem bonorum.</dd>
          </dl>


          <ol>
            <li>Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur?</li>
            <li>Erit enim instructus ad mortem contemnendam, ad exilium, ad ipsum etiam dolorem.</li>
            <li>An me, inquam, nisi te audire vellem, censes haec dicturum fuisse?</li>
            <li>Quid enim mihi potest esse optatius quam cum Catone, omnium virtutum auctore, de virtutibus disputare?</li>
          </ol>


          <blockquote cite='http://loripsum.net'>
            Et tamen puto concedi nobis oportere ut Graeco verbo utamur, si quando minus occurret Latinum, ne hoc ephippiis et acratophoris potius quam proegmenis et apoproegmenis concedatur;
          </blockquote>
        </div>
      </section>
    )
  }
});

module.exports = LegalContent;