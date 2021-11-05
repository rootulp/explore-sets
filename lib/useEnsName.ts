import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useEffect, useState } from "react";

export function useEnsName() {
    const [ensName, setEnsName] = useState('');
    const { account } = useWeb3React()
    const web3 = useWeb3React();
    const provider: Web3Provider = web3?.library

    useEffect(() => {
        const fetchEnsName = async () => {
            if (!provider || !account) {
                setEnsName("")
                return
            }
            setEnsName(await provider.lookupAddress(account));
        };

        fetchEnsName();
      }, [provider, account]);

    return {
        ensName: ensName
    }
}
