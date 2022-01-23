/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box, Text, Link } from 'theme-ui';
import Adherez from '../components/adherez';
import PresseContent from '../components/presse-content';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["presse", "common"])),
  },
});


export default function Presse() {
  const { t } = useTranslation('presse');

  return (

    <section sx={styles.presse}>

      <Box sx={styles.sectionThree}>

        <Box sx={styles.containerThree}>

          <Box sx={styles.sectionTitle} >
            <Text as="h2">
              {t("titre presse")}
            </Text>
          </Box>

          <PresseContent />
          
        </Box>
        
      </Box>
      <Box sx={styles.containerThree}>
      <p>Vous êtes journaliste ? Nous vous répondons par mail : <Link href="mailto:contact@mieuxvoter.fr">contact@mieuxvoter.fr</Link></p>
      </Box>
      <Adherez />
    </section>
  );
}

const styles = {
  containerThree: {
    width: [null, null, null, '90%', '80%'],
    mx: 'auto',
  },
  sectionThree: {
    py: 9,
    h2: {
      fontSize: ['52px', '72px'],
      lineHeight: '1',
      textAlign: 'left',
      ml: ['10%', '15%', '5%'],
    },
  },
  sectionTitle: {
    width: ['100%', '100%', '100%', '20%'],
  },
}