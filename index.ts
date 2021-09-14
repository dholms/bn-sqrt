import BN from 'bn.js'

export const sqrt = (num: BN): BN => {
  if(num.lt(new BN(0))) {
    throw new Error("Sqrt only works on non-negtiave inputs")
  }
  if(num.lt(new BN(2))) {
    return num
  }

  const smallCand = sqrt(num.shrn(2)).shln(1)
  const largeCand = smallCand.add(new BN(1))

  if (largeCand.mul(largeCand).gt(num)) {
    return smallCand
  } else {
    return largeCand
  }
}

export default sqrt
