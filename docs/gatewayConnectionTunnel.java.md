# `gatewayConnectionTunnel` Submodule <a name="`gatewayConnectionTunnel` Submodule" id="@cdktf/provider-upcloud.gatewayConnectionTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GatewayConnectionTunnel <a name="GatewayConnectionTunnel" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel upcloud_gateway_connection_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.gateway_connection_tunnel.GatewayConnectionTunnel;

GatewayConnectionTunnel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .connectionId(java.lang.String)
    .ipsecAuthPsk(GatewayConnectionTunnelIpsecAuthPsk)
    .localAddressName(java.lang.String)
    .name(java.lang.String)
    .remoteAddress(java.lang.String)
//  .id(java.lang.String)
//  .ipsecProperties(GatewayConnectionTunnelIpsecProperties)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | ID of the upcloud_gateway_connection resource to which the tunnel belongs. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.ipsecAuthPsk">ipsecAuthPsk</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | ipsec_auth_psk block. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.localAddressName">localAddressName</a></code> | <code>java.lang.String</code> | Public (UpCloud) endpoint address of this tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the tunnel, should be unique within the connection. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.remoteAddress">remoteAddress</a></code> | <code>java.lang.String</code> | Remote public IP address of the tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.ipsecProperties">ipsecProperties</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | ipsec_properties block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

ID of the upcloud_gateway_connection resource to which the tunnel belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#connection_id GatewayConnectionTunnel#connection_id}

---

##### `ipsecAuthPsk`<sup>Required</sup> <a name="ipsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.ipsecAuthPsk"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

ipsec_auth_psk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#ipsec_auth_psk GatewayConnectionTunnel#ipsec_auth_psk}

---

##### `localAddressName`<sup>Required</sup> <a name="localAddressName" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.localAddressName"></a>

- *Type:* java.lang.String

Public (UpCloud) endpoint address of this tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#local_address_name GatewayConnectionTunnel#local_address_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the tunnel, should be unique within the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#name GatewayConnectionTunnel#name}

---

##### `remoteAddress`<sup>Required</sup> <a name="remoteAddress" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.remoteAddress"></a>

- *Type:* java.lang.String

Remote public IP address of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#remote_address GatewayConnectionTunnel#remote_address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipsecProperties`<sup>Optional</sup> <a name="ipsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.ipsecProperties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

ipsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#ipsec_properties GatewayConnectionTunnel#ipsec_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk">putIpsecAuthPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties">putIpsecProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetIpsecProperties">resetIpsecProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpsecAuthPsk` <a name="putIpsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk"></a>

```java
public void putIpsecAuthPsk(GatewayConnectionTunnelIpsecAuthPsk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---

##### `putIpsecProperties` <a name="putIpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties"></a>

```java
public void putIpsecProperties(GatewayConnectionTunnelIpsecProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetId"></a>

```java
public void resetId()
```

##### `resetIpsecProperties` <a name="resetIpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetIpsecProperties"></a>

```java
public void resetIpsecProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GatewayConnectionTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.gateway_connection_tunnel.GatewayConnectionTunnel;

GatewayConnectionTunnel.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.gateway_connection_tunnel.GatewayConnectionTunnel;

GatewayConnectionTunnel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.gateway_connection_tunnel.GatewayConnectionTunnel;

GatewayConnectionTunnel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.gateway_connection_tunnel.GatewayConnectionTunnel;

GatewayConnectionTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GatewayConnectionTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GatewayConnectionTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GatewayConnectionTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GatewayConnectionTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GatewayConnectionTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPsk">ipsecAuthPsk</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference">GatewayConnectionTunnelIpsecAuthPskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecProperties">ipsecProperties</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference">GatewayConnectionTunnelIpsecPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.operationalState">operationalState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPskInput">ipsecAuthPskInput</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecPropertiesInput">ipsecPropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressNameInput">localAddressNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddressInput">remoteAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressName">localAddressName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddress">remoteAddress</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipsecAuthPsk`<sup>Required</sup> <a name="ipsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPsk"></a>

```java
public GatewayConnectionTunnelIpsecAuthPskOutputReference getIpsecAuthPsk();
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference">GatewayConnectionTunnelIpsecAuthPskOutputReference</a>

---

##### `ipsecProperties`<sup>Required</sup> <a name="ipsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecProperties"></a>

```java
public GatewayConnectionTunnelIpsecPropertiesOutputReference getIpsecProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference">GatewayConnectionTunnelIpsecPropertiesOutputReference</a>

---

##### `operationalState`<sup>Required</sup> <a name="operationalState" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.operationalState"></a>

```java
public java.lang.String getOperationalState();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipsecAuthPskInput`<sup>Optional</sup> <a name="ipsecAuthPskInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPskInput"></a>

```java
public GatewayConnectionTunnelIpsecAuthPsk getIpsecAuthPskInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---

##### `ipsecPropertiesInput`<sup>Optional</sup> <a name="ipsecPropertiesInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecPropertiesInput"></a>

```java
public GatewayConnectionTunnelIpsecProperties getIpsecPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---

##### `localAddressNameInput`<sup>Optional</sup> <a name="localAddressNameInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressNameInput"></a>

```java
public java.lang.String getLocalAddressNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `remoteAddressInput`<sup>Optional</sup> <a name="remoteAddressInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddressInput"></a>

```java
public java.lang.String getRemoteAddressInput();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `localAddressName`<sup>Required</sup> <a name="localAddressName" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressName"></a>

```java
public java.lang.String getLocalAddressName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `remoteAddress`<sup>Required</sup> <a name="remoteAddress" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddress"></a>

```java
public java.lang.String getRemoteAddress();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GatewayConnectionTunnelConfig <a name="GatewayConnectionTunnelConfig" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.gateway_connection_tunnel.GatewayConnectionTunnelConfig;

GatewayConnectionTunnelConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .connectionId(java.lang.String)
    .ipsecAuthPsk(GatewayConnectionTunnelIpsecAuthPsk)
    .localAddressName(java.lang.String)
    .name(java.lang.String)
    .remoteAddress(java.lang.String)
//  .id(java.lang.String)
//  .ipsecProperties(GatewayConnectionTunnelIpsecProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | ID of the upcloud_gateway_connection resource to which the tunnel belongs. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecAuthPsk">ipsecAuthPsk</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | ipsec_auth_psk block. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.localAddressName">localAddressName</a></code> | <code>java.lang.String</code> | Public (UpCloud) endpoint address of this tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the tunnel, should be unique within the connection. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.remoteAddress">remoteAddress</a></code> | <code>java.lang.String</code> | Remote public IP address of the tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecProperties">ipsecProperties</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | ipsec_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

ID of the upcloud_gateway_connection resource to which the tunnel belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#connection_id GatewayConnectionTunnel#connection_id}

---

##### `ipsecAuthPsk`<sup>Required</sup> <a name="ipsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecAuthPsk"></a>

```java
public GatewayConnectionTunnelIpsecAuthPsk getIpsecAuthPsk();
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

ipsec_auth_psk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#ipsec_auth_psk GatewayConnectionTunnel#ipsec_auth_psk}

---

##### `localAddressName`<sup>Required</sup> <a name="localAddressName" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.localAddressName"></a>

```java
public java.lang.String getLocalAddressName();
```

- *Type:* java.lang.String

Public (UpCloud) endpoint address of this tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#local_address_name GatewayConnectionTunnel#local_address_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the tunnel, should be unique within the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#name GatewayConnectionTunnel#name}

---

##### `remoteAddress`<sup>Required</sup> <a name="remoteAddress" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.remoteAddress"></a>

```java
public java.lang.String getRemoteAddress();
```

- *Type:* java.lang.String

Remote public IP address of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#remote_address GatewayConnectionTunnel#remote_address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipsecProperties`<sup>Optional</sup> <a name="ipsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecProperties"></a>

```java
public GatewayConnectionTunnelIpsecProperties getIpsecProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

ipsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#ipsec_properties GatewayConnectionTunnel#ipsec_properties}

---

### GatewayConnectionTunnelIpsecAuthPsk <a name="GatewayConnectionTunnelIpsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.gateway_connection_tunnel.GatewayConnectionTunnelIpsecAuthPsk;

GatewayConnectionTunnelIpsecAuthPsk.builder()
    .psk(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.property.psk">psk</a></code> | <code>java.lang.String</code> | The pre-shared key. |

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.property.psk"></a>

```java
public java.lang.String getPsk();
```

- *Type:* java.lang.String

The pre-shared key.

This value is only used during resource creation and is not returned in the state. It is not possible to update this value. If you need to update it, delete the connection and create a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#psk GatewayConnectionTunnel#psk}

---

### GatewayConnectionTunnelIpsecProperties <a name="GatewayConnectionTunnelIpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.gateway_connection_tunnel.GatewayConnectionTunnelIpsecProperties;

GatewayConnectionTunnelIpsecProperties.builder()
//  .childRekeyTime(java.lang.Number)
//  .dpdDelay(java.lang.Number)
//  .dpdTimeout(java.lang.Number)
//  .ikeLifetime(java.lang.Number)
//  .phase1Algorithms(java.util.List<java.lang.String>)
//  .phase1DhGroupNumbers(java.util.List<java.lang.Number>)
//  .phase1IntegrityAlgorithms(java.util.List<java.lang.String>)
//  .phase2Algorithms(java.util.List<java.lang.String>)
//  .phase2DhGroupNumbers(java.util.List<java.lang.Number>)
//  .phase2IntegrityAlgorithms(java.util.List<java.lang.String>)
//  .rekeyTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.childRekeyTime">childRekeyTime</a></code> | <code>java.lang.Number</code> | IKE child SA rekey time in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdDelay">dpdDelay</a></code> | <code>java.lang.Number</code> | Delay before sending Dead Peer Detection packets if no traffic is detected, in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdTimeout">dpdTimeout</a></code> | <code>java.lang.Number</code> | Timeout period for DPD reply before considering the peer to be dead, in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.ikeLifetime">ikeLifetime</a></code> | <code>java.lang.Number</code> | Maximum IKE SA lifetime in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1Algorithms">phase1Algorithms</a></code> | <code>java.util.List<java.lang.String></code> | List of Phase 1: Proposal algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1DhGroupNumbers">phase1DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | List of Phase 1 Diffie-Hellman group numbers. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1IntegrityAlgorithms">phase1IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | List of Phase 1 integrity algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2Algorithms">phase2Algorithms</a></code> | <code>java.util.List<java.lang.String></code> | List of Phase 2: Security Association algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2DhGroupNumbers">phase2DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | List of Phase 2 Diffie-Hellman group numbers. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2IntegrityAlgorithms">phase2IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | List of Phase 2 integrity algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.rekeyTime">rekeyTime</a></code> | <code>java.lang.Number</code> | IKE SA rekey time in seconds. |

---

##### `childRekeyTime`<sup>Optional</sup> <a name="childRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.childRekeyTime"></a>

```java
public java.lang.Number getChildRekeyTime();
```

- *Type:* java.lang.Number

IKE child SA rekey time in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#child_rekey_time GatewayConnectionTunnel#child_rekey_time}

---

##### `dpdDelay`<sup>Optional</sup> <a name="dpdDelay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdDelay"></a>

```java
public java.lang.Number getDpdDelay();
```

- *Type:* java.lang.Number

Delay before sending Dead Peer Detection packets if no traffic is detected, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#dpd_delay GatewayConnectionTunnel#dpd_delay}

---

##### `dpdTimeout`<sup>Optional</sup> <a name="dpdTimeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdTimeout"></a>

```java
public java.lang.Number getDpdTimeout();
```

- *Type:* java.lang.Number

Timeout period for DPD reply before considering the peer to be dead, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#dpd_timeout GatewayConnectionTunnel#dpd_timeout}

---

##### `ikeLifetime`<sup>Optional</sup> <a name="ikeLifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.ikeLifetime"></a>

```java
public java.lang.Number getIkeLifetime();
```

- *Type:* java.lang.Number

Maximum IKE SA lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#ike_lifetime GatewayConnectionTunnel#ike_lifetime}

---

##### `phase1Algorithms`<sup>Optional</sup> <a name="phase1Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1Algorithms"></a>

```java
public java.util.List<java.lang.String> getPhase1Algorithms();
```

- *Type:* java.util.List<java.lang.String>

List of Phase 1: Proposal algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#phase1_algorithms GatewayConnectionTunnel#phase1_algorithms}

---

##### `phase1DhGroupNumbers`<sup>Optional</sup> <a name="phase1DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1DhGroupNumbers"></a>

```java
public java.util.List<java.lang.Number> getPhase1DhGroupNumbers();
```

- *Type:* java.util.List<java.lang.Number>

List of Phase 1 Diffie-Hellman group numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#phase1_dh_group_numbers GatewayConnectionTunnel#phase1_dh_group_numbers}

---

##### `phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="phase1IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1IntegrityAlgorithms"></a>

```java
public java.util.List<java.lang.String> getPhase1IntegrityAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

List of Phase 1 integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#phase1_integrity_algorithms GatewayConnectionTunnel#phase1_integrity_algorithms}

---

##### `phase2Algorithms`<sup>Optional</sup> <a name="phase2Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2Algorithms"></a>

```java
public java.util.List<java.lang.String> getPhase2Algorithms();
```

- *Type:* java.util.List<java.lang.String>

List of Phase 2: Security Association algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#phase2_algorithms GatewayConnectionTunnel#phase2_algorithms}

---

##### `phase2DhGroupNumbers`<sup>Optional</sup> <a name="phase2DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2DhGroupNumbers"></a>

```java
public java.util.List<java.lang.Number> getPhase2DhGroupNumbers();
```

- *Type:* java.util.List<java.lang.Number>

List of Phase 2 Diffie-Hellman group numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#phase2_dh_group_numbers GatewayConnectionTunnel#phase2_dh_group_numbers}

---

##### `phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="phase2IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2IntegrityAlgorithms"></a>

```java
public java.util.List<java.lang.String> getPhase2IntegrityAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

List of Phase 2 integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#phase2_integrity_algorithms GatewayConnectionTunnel#phase2_integrity_algorithms}

---

##### `rekeyTime`<sup>Optional</sup> <a name="rekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.rekeyTime"></a>

```java
public java.lang.Number getRekeyTime();
```

- *Type:* java.lang.Number

IKE SA rekey time in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/gateway_connection_tunnel#rekey_time GatewayConnectionTunnel#rekey_time}

---

## Classes <a name="Classes" id="Classes"></a>

### GatewayConnectionTunnelIpsecAuthPskOutputReference <a name="GatewayConnectionTunnelIpsecAuthPskOutputReference" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.gateway_connection_tunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference;

new GatewayConnectionTunnelIpsecAuthPskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.pskInput">pskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.psk">psk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pskInput`<sup>Optional</sup> <a name="pskInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.pskInput"></a>

```java
public java.lang.String getPskInput();
```

- *Type:* java.lang.String

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.psk"></a>

```java
public java.lang.String getPsk();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.internalValue"></a>

```java
public GatewayConnectionTunnelIpsecAuthPsk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---


### GatewayConnectionTunnelIpsecPropertiesOutputReference <a name="GatewayConnectionTunnelIpsecPropertiesOutputReference" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.gateway_connection_tunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference;

new GatewayConnectionTunnelIpsecPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetChildRekeyTime">resetChildRekeyTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdDelay">resetDpdDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdTimeout">resetDpdTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetIkeLifetime">resetIkeLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1Algorithms">resetPhase1Algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1DhGroupNumbers">resetPhase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1IntegrityAlgorithms">resetPhase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2Algorithms">resetPhase2Algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2DhGroupNumbers">resetPhase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2IntegrityAlgorithms">resetPhase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetRekeyTime">resetRekeyTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChildRekeyTime` <a name="resetChildRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetChildRekeyTime"></a>

```java
public void resetChildRekeyTime()
```

##### `resetDpdDelay` <a name="resetDpdDelay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdDelay"></a>

```java
public void resetDpdDelay()
```

##### `resetDpdTimeout` <a name="resetDpdTimeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdTimeout"></a>

```java
public void resetDpdTimeout()
```

##### `resetIkeLifetime` <a name="resetIkeLifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetIkeLifetime"></a>

```java
public void resetIkeLifetime()
```

##### `resetPhase1Algorithms` <a name="resetPhase1Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1Algorithms"></a>

```java
public void resetPhase1Algorithms()
```

##### `resetPhase1DhGroupNumbers` <a name="resetPhase1DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1DhGroupNumbers"></a>

```java
public void resetPhase1DhGroupNumbers()
```

##### `resetPhase1IntegrityAlgorithms` <a name="resetPhase1IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1IntegrityAlgorithms"></a>

```java
public void resetPhase1IntegrityAlgorithms()
```

##### `resetPhase2Algorithms` <a name="resetPhase2Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2Algorithms"></a>

```java
public void resetPhase2Algorithms()
```

##### `resetPhase2DhGroupNumbers` <a name="resetPhase2DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2DhGroupNumbers"></a>

```java
public void resetPhase2DhGroupNumbers()
```

##### `resetPhase2IntegrityAlgorithms` <a name="resetPhase2IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2IntegrityAlgorithms"></a>

```java
public void resetPhase2IntegrityAlgorithms()
```

##### `resetRekeyTime` <a name="resetRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetRekeyTime"></a>

```java
public void resetRekeyTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTimeInput">childRekeyTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelayInput">dpdDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeoutInput">dpdTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetimeInput">ikeLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1AlgorithmsInput">phase1AlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbersInput">phase1DhGroupNumbersInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithmsInput">phase1IntegrityAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2AlgorithmsInput">phase2AlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbersInput">phase2DhGroupNumbersInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithmsInput">phase2IntegrityAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTimeInput">rekeyTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTime">childRekeyTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelay">dpdDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeout">dpdTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetime">ikeLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1Algorithms">phase1Algorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbers">phase1DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithms">phase1IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2Algorithms">phase2Algorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbers">phase2DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithms">phase2IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTime">rekeyTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `childRekeyTimeInput`<sup>Optional</sup> <a name="childRekeyTimeInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTimeInput"></a>

```java
public java.lang.Number getChildRekeyTimeInput();
```

- *Type:* java.lang.Number

---

##### `dpdDelayInput`<sup>Optional</sup> <a name="dpdDelayInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelayInput"></a>

```java
public java.lang.Number getDpdDelayInput();
```

- *Type:* java.lang.Number

---

##### `dpdTimeoutInput`<sup>Optional</sup> <a name="dpdTimeoutInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeoutInput"></a>

```java
public java.lang.Number getDpdTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `ikeLifetimeInput`<sup>Optional</sup> <a name="ikeLifetimeInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetimeInput"></a>

```java
public java.lang.Number getIkeLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `phase1AlgorithmsInput`<sup>Optional</sup> <a name="phase1AlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1AlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getPhase1AlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="phase1DhGroupNumbersInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbersInput"></a>

```java
public java.util.List<java.lang.Number> getPhase1DhGroupNumbersInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="phase1IntegrityAlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getPhase1IntegrityAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phase2AlgorithmsInput`<sup>Optional</sup> <a name="phase2AlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2AlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getPhase2AlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="phase2DhGroupNumbersInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbersInput"></a>

```java
public java.util.List<java.lang.Number> getPhase2DhGroupNumbersInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="phase2IntegrityAlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getPhase2IntegrityAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rekeyTimeInput`<sup>Optional</sup> <a name="rekeyTimeInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTimeInput"></a>

```java
public java.lang.Number getRekeyTimeInput();
```

- *Type:* java.lang.Number

---

##### `childRekeyTime`<sup>Required</sup> <a name="childRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTime"></a>

```java
public java.lang.Number getChildRekeyTime();
```

- *Type:* java.lang.Number

---

##### `dpdDelay`<sup>Required</sup> <a name="dpdDelay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelay"></a>

```java
public java.lang.Number getDpdDelay();
```

- *Type:* java.lang.Number

---

##### `dpdTimeout`<sup>Required</sup> <a name="dpdTimeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeout"></a>

```java
public java.lang.Number getDpdTimeout();
```

- *Type:* java.lang.Number

---

##### `ikeLifetime`<sup>Required</sup> <a name="ikeLifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetime"></a>

```java
public java.lang.Number getIkeLifetime();
```

- *Type:* java.lang.Number

---

##### `phase1Algorithms`<sup>Required</sup> <a name="phase1Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1Algorithms"></a>

```java
public java.util.List<java.lang.String> getPhase1Algorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phase1DhGroupNumbers`<sup>Required</sup> <a name="phase1DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbers"></a>

```java
public java.util.List<java.lang.Number> getPhase1DhGroupNumbers();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `phase1IntegrityAlgorithms`<sup>Required</sup> <a name="phase1IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithms"></a>

```java
public java.util.List<java.lang.String> getPhase1IntegrityAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phase2Algorithms`<sup>Required</sup> <a name="phase2Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2Algorithms"></a>

```java
public java.util.List<java.lang.String> getPhase2Algorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phase2DhGroupNumbers`<sup>Required</sup> <a name="phase2DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbers"></a>

```java
public java.util.List<java.lang.Number> getPhase2DhGroupNumbers();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `phase2IntegrityAlgorithms`<sup>Required</sup> <a name="phase2IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithms"></a>

```java
public java.util.List<java.lang.String> getPhase2IntegrityAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rekeyTime`<sup>Required</sup> <a name="rekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTime"></a>

```java
public java.lang.Number getRekeyTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.internalValue"></a>

```java
public GatewayConnectionTunnelIpsecProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---



