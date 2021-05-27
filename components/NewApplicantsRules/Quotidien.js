import styles from "./NewApplicantsRules.module.css";

export default function NewApplicantsRules() {
  return (
    <div className={styles.rules_container}>
      <p>
        L'identification des nouveaux entrants est souvent difficile à mettre à place par les
        départements. Cet outil vous permet d'obtenir des listes de nouveaux entrants que vous
        pourrez comparer avec les listes obtenues dans votre département.
      </p>
      <p>
        Pour les identifier dans les flux quotidiens, nous identifions d'abord tous les
        bénéficiaires du RSA du mois précédent à l'aide du flux mensuel du mois précédent. Ensuite
        nous identifions les demandeurs dans les flux quotidiens <strong>postérieurs</strong> à ce
        flux mensuel, et nous ne gardons que ceux qui n'ont pas été identifiés comme bénéficiaires
        au mois précédent.
      </p>
      <p>Pour le moment, nous considérons qu'un demandeur bénéficie du RSA si:</p>
      <ul>
        <li>
          <p>
            <strong>ETATDOSRSA = 2</strong> OU (<strong>ETATDOSRSA = 4 </strong>&{" "}
            <strong>
              MOTISUSVERSRSA compris dans les valeurs : ‘01’, ‘05’; ‘06’, ‘35’, ‘36’, ou ‘CV’
            </strong>
            )
          </p>
        </li>
        <li>
          <p>
            <strong>TOPPERSDRODEVORSA = 1</strong>
          </p>
        </li>
      </ul>
    </div>
  );
}
