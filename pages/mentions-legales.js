import Layout from "../components/layout";
import Mailer from "../components/mailer";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Mentions légales</h1>

        <div className={styles.content}>
          <h2>Éditeur</h2>
          <p>
            Ce site est édité par la direction interministérielle du numérique
            (DINUM), un service du Premier ministre.
          </p>
          <p>
            DINUM
            <br />
            20 avenue de Ségur
            <br />
            75007 Paris
            <br />
            Tel. accueil&nbsp;: 01.71.21.01.70
            <br />
            SIRET&nbsp;: 12000101100010 (secrétariat général du gouvernement)
            <br />
            SIREN&nbsp;: 120&nbsp;001&nbsp;011
            <br />
          </p>
          <p>
            Le code source est disponible à cette adresse&nbsp;:{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/betagouv/analyse-flux-insertion"
            >
              https://github.com/betagouv/analyse-flux-insertion
            </a>
          </p>
          <h3>Directeur de la publication</h3>
          <p>Nadi Bou Hanna, Directeur interministériel du numérique.</p>

          <h2>Hébergement</h2>

          <p>
            Ce site est hébergé par Fastly au travers de la plateforme Github.
          </p>

          <p>
            Fastly, Inc.
            <br />
            P.O. Box 78266
            <br />
            San Francisco, CA 94107
            <br />
          </p>
          <p>
            GitHub, Inc. c/o Corporation Service Company
            <br />
            2710 Gateway Oaks Drive
            <br />
            Suite 150N Sacramento, CA 95833-3505
            <br />
          </p>

          <h2>Accessibilité</h2>
          <p>
            La conformité aux normes d’accessibilité numérique est un objectif
            ultérieur mais nous tâchons de rendre ce site accessible à toutes et
            à tous. Pour en savoir plus sur la politique d’accessibilité
            numérique de
            l’État&nbsp;: http://references.modernisation.gouv.fr/accessibilite-numerique
          </p>
          <p>
            Si vous rencontrez un défaut d’accessibilité vous empêchant
            d’accéder à un contenu ou une fonctionnalité du site, merci de nous
            en faire part.
          </p>
          <p>
            Si vous n’obtenez pas de réponse rapide de notre part, vous êtes en
            droit de faire parvenir vos doléances ou une demande de saisine au
            Défenseur des droits.
          </p>

          <h2>Confidentialité et Cookies</h2>
          <p>
            Le site est exempté de l’application des normes relatives à la
            protection des données dans la mesure où il ne collecte aucune
            donnée lors de la navigation.
          </p>
          <p>
            Des données anonymisées sont en revanche collectées, au travers de
            l’outil Matomo, un outil de statistiques libre, paramétré pour être
            en conformité avec la recommandation « Cookies » de la CNIL.
          </p>
          <p>
            Cela signifie que votre adresse IP, par exemple, est anonymisée
            avant d’être enregistrée, n’étant plus une donnée personnelle. Il
            est donc impossible d’associer vos visites, et vos utilisations sur
            ce site à votre personne.
          </p>
          <p>
            Cet outil nous permet de suivre l’activité des utilisateurs du site,
            de réaliser des statistiques d’usage des outils proposés et de
            recueillir des informations sur la typologie des fichiers déposés.
          </p>
          <p>
            Vous pouvez néanmoins désactiver cette fonctionnalité anonyme&nbsp;:
          </p>
          <p>
            <iframe
              style={{ width: "100%" }}
              className="optout"
              src="https://stats.data.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=fr"
            ></iframe>
          </p>

          <h2>Sécurité</h2>
          <p>
            Le site est protégé par un certificat électronique, matérialisé pour
            la grande majorité des navigateurs par un cadenas. Cette protection
            participe à la confidentialité des échanges. En aucun cas les
            services associés à la plateforme ne seront à l’origine d’envoi de
            courriels pour demander la saisie d’informations personnelles.
          </p>
        </div>
      </main>
    </Layout>
  );
}
