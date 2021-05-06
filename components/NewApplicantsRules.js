import styles from "./NewApplicantsRules.module.css";

export default function NewApplicantsRules() {
  return (
    <div className={styles.rules_container}>
      <p>
        L'identification des nouveaux entrants est souvent difficile à mettre à place par les
        départements. Cet outil vous permet d'obtenir des listes de nouveaux entrants que vous
        pourrez comparer avec les listes obtenues dans votre département. Nous utilisons aujourd'hui
        deux méthodes:
      </p>
      <ul>
        <li>
          <p>
            L'utilisation de la variable <strong>TOPPERSENTDRODEVORSA</strong>, présente dans le
            flux bénéficiaire quotidien. Elle signale si la personne est entrante en droits et
            devoirs depuis le dernier flux quotidien. Cette balise n'est présente que pour les
            personnes ayant un à<strong> "1"</strong> et sous deux conditions:
          </p>
          <ul>
            <li>
              <p>Il existe un droit réel ou théorique au RSA</p>
            </li>
            <li>
              <p>
                Absence de contrat d'engagement et/ou de projet personnel d'accompagnement pour la
                personne sur le mois de début du top personne soumis à droits et devoirs dans les
                dossiers CAF
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            Le croisement de plusieurs balises des flux bénéficiaires quotidien ou mensuel (sans
            utiliser le TOPPERSENTDRODEVORSA). Cette méthode permet de reconstituer les catégories
            de nouveaux entrants définies dans l'instruction du 19 mars 2021, comme présenté dans le
            tableau suivant:
          </p>
          <p>
            <div className={styles.image_container}>
              <img
                src="/new_applicants_rules.png"
                alt="new_applicants_rules"
                className={styles.rules_image}
              />
            </div>
          </p>
        </li>
      </ul>
    </div>
  );
}
