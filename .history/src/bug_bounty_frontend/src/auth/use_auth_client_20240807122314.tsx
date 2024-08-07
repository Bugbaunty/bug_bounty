import React, { useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import {
  canisterId,
  createActor,
  bug_bounty_backend,
} from "../../../declarations/bug_bounty_backend";
import { _SERVICE } from "../../../declarations/bug_bounty_backend/bug_bounty_backend.did";
import { ActorSubclass } from "@dfinity/agent";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext<{
  isAuthenticated: boolean;
  loginII: any;
  loginNFID: any;
  logout: any;
  authClient: any;
  identity: any;
  principal: any;
  whoamiActor: ActorSubclass<_SERVICE> | null;
}>({
  isAuthenticated: false,
  loginII: null,
  loginNFID: null,
  logout: null,
  authClient: null,
  identity: null,
  principal: null,
  whoamiActor: null,
});

export const use_auth_client = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authClient, setAuthClient] = useState(null);
  const [identity, setIdentity] = useState(null);
  const [principal, setPrincipal] = useState(null);
  const [whoamiActor, setWhoamiActor] = useState<ActorSubclass<_SERVICE>>();
  const navigate = useNavigate();

  return <div>use_auth_client</div>;
};

export default use_auth_client;
