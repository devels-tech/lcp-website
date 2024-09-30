import { NextApiRequest, NextApiResponse } from 'next'
import { format } from '@formkit/tempo'

import { getEventInscriptionsDyc } from '@/lib/services/firebase/utils/getData'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const data = await getEventInscriptionsDyc()

  return res.status(200).json({
    result: {
      data: data.docs.map(item => {
        const fullData = item.data()

        const dateBirth = format(fullData.dateBirth, 'DD MMMM YYYY', 'es')

        return {
          ...fullData,
          dateBirth
        }
      })
    }
  })
}
