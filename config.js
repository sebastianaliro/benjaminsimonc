/**
 * =====================================================
 *  CONFIGURACIÓN DEL SITIO — benjaminsimonc.com
 *  ✏️  EDITÁ ESTE ARCHIVO para cambiar fotos y textos.
 *  No necesitás saber programar.
 * =====================================================
 *
 *  CÓMO AGREGAR UN PROYECTO NUEVO:
 *  1. Creá una carpeta en fotos/ con el nombre del proyecto
 *  2. Subí las fotos numeradas: 01.jpg, 02.jpg, etc.
 *  3. Copiá un bloque de abajo y pegalo donde quieras
 *
 *  CATEGORÍAS disponibles:
 *    'marcas'   → aparece en Marcas / Brands
 *    'retratos' → aparece en Retratos / Portraits
 *    'diary'    → aparece en Diary
 */

const SITE_CONFIG = {

  // ── DATOS DEL FOTÓGRAFO ──────────────────────────────
  nombre:     'Benjamín Carvajal',
  titulo_es:  'Fotógrafo',
  titulo_en:  'Photographer',

  bio_es: 'Soy Benjamín Carvajal, fotógrafo especializado en retrato, matrimonios y fotografía comercial de moda. Mi trabajo captura la autenticidad de cada momento con una mirada honesta y una estética refinada.',
  bio_en: "I'm Benjamín Carvajal, a photographer specializing in portraiture, weddings and commercial fashion photography. My work captures the authenticity of each moment with an honest eye and a refined aesthetic.",

  disponible_es: 'Disponible en',
  disponible_en: 'Available in',
  lugares: ['Chile', 'Argentina', 'Brasil', 'Europa'],

  email:    'Benjamincarvajal4@gmail.com',
  telefono: '+56 9 9825 6517',

  // ── IMAGEN DE PORTADA ────────────────────────────────
  hero_img: 'fotos/hero.jpg',

  // ── CATEGORÍAS ───────────────────────────────────────
  categorias: {
    marcas:   { es: 'Marcas',   en: 'Brands'    },
    retratos: { es: 'Retratos', en: 'Portraits' },
    diary:    { es: 'Diary',    en: 'Diary'     },
  },

  // ── PROYECTOS ────────────────────────────────────────
  proyectos: [

    // ════════════════════════════════
    //  MARCAS
    // ════════════════════════════════
    {
      id: 'yves-saint-laurent',
      nameEs: 'Yves Saint Laurent',
      nameEn: 'Yves Saint Laurent',
      metaEs: 'París',
      metaEn: 'Paris',
      category: 'marcas',
      fotos: [
        'fotos/yves-saint-laurent/01.jpg',
      ]
    },
    {
      id: 'panorama',
      nameEs: 'Panorama',
      nameEn: 'Panorama',
      metaEs: 'París',
      metaEn: 'Paris',
      category: 'marcas',
      fotos: [
        'fotos/panorama/01.jpg',
      ]
    },
    {
      id: 'cresta',
      nameEs: 'Cresta',
      nameEn: 'Cresta',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/cresta/01.jpg',
        'fotos/cresta/02.jpg',
      ]
    },
    {
      id: 'nike',
      nameEs: 'Nike',
      nameEn: 'Nike',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/nike/01.jpg',
      ]
    },
    {
      id: 'noe-vintage-couture',
      nameEs: 'NOE Vintage Couture',
      nameEn: 'NOE Vintage Couture',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/noe-vintage-couture/01.jpg',
      ]
    },
    {
      id: 'midori',
      nameEs: 'Midori.',
      nameEn: 'Midori.',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/midori/01.jpg',
      ]
    },
    {
      id: 'taakk',
      nameEs: 'TAAKK',
      nameEn: 'TAAKK',
      metaEs: 'París',
      metaEn: 'Paris',
      category: 'marcas',
      fotos: [
        'fotos/taakk/01.jpg',
      ]
    },
    {
      id: 'amen',
      nameEs: 'Amen',
      nameEn: 'Amen',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/amen/01.jpg',
      ]
    },
    {
      id: 'bambika',
      nameEs: 'Bambika',
      nameEn: 'Bambika',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/bambika/01.jpg',
      ]
    },
    {
      id: 'gonzalo-pozo',
      nameEs: 'Gonzalo Pozo*',
      nameEn: 'Gonzalo Pozo*',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/gonzalo-pozo/01.jpg',
      ]
    },
    {
      id: 'la-martic',
      nameEs: 'La Martic',
      nameEn: 'La Martic',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/la-martic/01.jpg',
      ]
    },
    {
      id: 'cresta-joia',
      nameEs: 'Cresta × Joia',
      nameEn: 'Cresta × Joia',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/cresta-joia/01.jpg',
      ]
    },
    {
      id: 'sagi',
      nameEs: 'Sagi',
      nameEn: 'Sagi',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/sagi/01.jpg',
      ]
    },
    {
      id: 'rootsouth',
      nameEs: 'Rootsouth®',
      nameEn: 'Rootsouth®',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/rootsouth/01.jpg',
      ]
    },
    {
      id: 'ilicita',
      nameEs: 'Ilícita',
      nameEn: 'Ilícita',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/ilicita/01.jpg',
      ]
    },
    {
      id: 'nu',
      nameEs: 'NU',
      nameEn: 'NU',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/nu/01.jpg',
      ]
    },
    {
      id: 'cresta-meze',
      nameEs: 'Cresta × Mézé',
      nameEn: 'Cresta × Mézé',
      metaEs: '',
      metaEn: '',
      category: 'marcas',
      fotos: [
        'fotos/cresta-meze/01.jpg',
      ]
    },

    // ════════════════════════════════
    //  RETRATOS
    // ════════════════════════════════
    {
      id: 'artist-portrait',
      nameEs: 'Artist Portrait',
      nameEn: 'Artist Portrait',
      metaEs: '',
      metaEn: '',
      category: 'retratos',
      fotos: [
        'fotos/artist-portrait/01.jpg',
      ]
    },

    // ════════════════════════════════
    //  DIARY
    // ════════════════════════════════
    {
      id: 'diary',
      nameEs: 'Diary',
      nameEn: 'Diary',
      metaEs: '',
      metaEn: '',
      category: 'diary',
      fotos: [
        'fotos/diary/01.jpg',
        'fotos/diary/02.jpg',
        'fotos/diary/03.jpg',
        'fotos/diary/04.jpg',
        'fotos/diary/05.jpg',
        'fotos/diary/06.jpg',
        'fotos/diary/07.jpg',
        'fotos/diary/08.jpg',
        'fotos/diary/09.jpg',
        'fotos/diary/10.jpg',
        'fotos/diary/11.jpg',
        'fotos/diary/12.jpg',
        'fotos/diary/13.jpg',
        'fotos/diary/14.jpg',
        'fotos/diary/15.jpg',
        'fotos/diary/16.jpg',
        'fotos/diary/17.jpg',
        'fotos/diary/18.jpg',
        'fotos/diary/19.jpg',
      ]
    },

  ] // fin proyectos

}; // fin SITE_CONFIG
