import ComplianceImageOrLink from '@/components/ComplianceMarket/ComplianceImageOrLink'

export default (
  <>
    <ComplianceImageOrLink
      href="https://www.gamblinghelponline.org.au/"
      src="/img/compliance/au/Gambling%20Help%20Online.svg"
    />
    <ComplianceImageOrLink src="/img/compliance/age/18+.svg" />
    <p className="order-last mb-4 ml-4 mr-4 grow basis-full columns-1 text-center text-sm">
      For free and confidential support call 1800 858 858 or visit{' '}
      <a href="https://www.gamblinghelponline.org.au/">
        gamblinghelponline.org.au
      </a>
      .
    </p>
  </>
)
